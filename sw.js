const staticCacheName = "site-static"; // the shell, or static resources
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.css',
    '/img/clock.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];

// install service worker
self.addEventListener('install', (evt) => {
    console.log('service worker has been installed', evt);
    // shell cacheing
    caches.open(staticCacheName)
        .then(cache => {
            cache.addAll()
        })
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
});