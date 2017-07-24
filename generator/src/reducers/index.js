'use strict';

import * as ActionTypes from '../actions';
import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import session from './session';
import sprintsReducer from './sprints';

/*
  Combine Reducers
  ----------------
  This file combines all the reducers of the application, if you need to add
  new reducer add it to the combineReducers functions parameter
*/

const app = (state = { title: 'Cargando...' }, action) => {

  if (action.type === 'SET_TITLE') {
    return Object.assign({}, state, { title: action.payload.text });
  }

  return state;
};

const rootReducer = combineReducers({
  app,
  session,
  sprintsReducer,
  router
});

export default rootReducer;
