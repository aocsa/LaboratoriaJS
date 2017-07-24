'use strict';

/*
  Webpack imports
  -----------------
  For some magical reason you need to add every asset that you need in the project
  here. Normally images, css, etc
*/
import './style/main.scss';
import './img/favicon.png';
import './img/logo.svg';


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import api from './middleware/api';
import reducers from './reducers';
import App from './containers/app';
import { AppContainer } from 'react-hot-loader';


const middlewares = [thunk, api];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);


// Hot reloading configuration
if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}
