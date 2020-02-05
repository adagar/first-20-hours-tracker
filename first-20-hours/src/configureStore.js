// this file will
// init our store
// setup thunk middleware
// call verifyAuth() action
// export our func so its accessible at root of app

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { verifyAuth } from './actions/';
import rootReducer from './reducers';

const configureStore = persistedState => {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
};

export default configureStore;
