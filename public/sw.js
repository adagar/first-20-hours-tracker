const staticCacheName = 'site-static-v7'; // the shell, or static resources
const dynamicCache = 'site-dynamic-v9'; // cache for storing dynamic data, like when visiting diff pages on site

const assets = [
    '/',
    '/pages/fallback.html',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/js/db.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/clock.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  ];

  const MAX_DYNAMIC_CACHE_SIZE = 3;

  /**
   * limitCacheSize
   * name = name of cache to limit size of
   * size = max size of cache (# of items)
   */
  const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if(keys.length > size) {
          // delete first item in array, which is the oldest. Then call this again, in case its STILL too big
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      })
    })
  }


// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets); //
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(keys
            .filter(key => key !== staticCacheName && key!== dynamicCache)
            .map(key => caches.delete(key))
          )
      })
    )
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    if(!evt.request.url.includes('firestore.googleapis.com')){
      evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCache).then(cache => {
            cache.put(evt.request.url, fetchRes.clone()); // making a copy of hte fetchRes so that we can return it on next line. Storing request, and response, into cache
            limitCacheSize(dynamicCache, MAX_DYNAMIC_CACHE_SIZE);
            return fetchRes;
          })
        });
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1) { // only returning this page if its an HTML page
          return caches.match('/pages/fallback.html');
        }
      })
    );
  }
});