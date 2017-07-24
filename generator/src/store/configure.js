'use strict';

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';

/*
  Store configuration
  -------------------
  Creates and configure a Redux store that hold all the state tree, this file
  is mainly use by index.js to configure the state of the application. Most likely
  you won't need to touch this file
  
*/
const configure = (preloadedState, history) => {

  const middlewares = [thunk, api];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};


export default configure;
