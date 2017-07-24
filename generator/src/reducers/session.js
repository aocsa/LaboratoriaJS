'use strict';


import MD5 from 'blueimp-md5';

/*
  Session reducer
  ---------------
  This Reducer process the session response from the API creating the userCtx
*/
const defaults = {
  userCtx: undefined,
  error: undefined
};


const createState = (prevState, newState) => {

  if (newState.userCtx && newState.userCtx.name) {
    newState.userCtx.md5 = MD5(newState.userCtx.name);
  }

  return Object.assign({}, prevState, newState);
};


const session = (state = defaults, action) => {

  if (action.type === 'LOAD_SESSION_PENDING') {
    return createState(state, { userCtx: null, error: null });
  }
  else if (action.type === 'LOAD_SESSION_FAILURE') {
    return createState(state, { userCtx: null, error: action.payload });
  }
  else if (action.type === 'LOAD_SESSION_SUCCESS') {
    return createState(state, { userCtx: action.payload.userCtx, error: null });
  }
  else if (action.type === 'SIGNIN_PENDING') {
    return createState(state, { userCtx: null, error: null });
  }
  else if (action.type === 'SIGNIN_FAILURE') {
    return createState(state, { userCtx: null, error: action.payload });
  }
  else if (action.type === 'SIGNIN_SUCCESS') {
    return createState(state, { userCtx: action.payload, error: null });
  }
  else if (action.type === 'SIGNOUT_PENDING') {
    return createState(state, { error: null });
  }
  else if (action.type === 'SIGNOUT_FAILURE') {
    return createState(state, { userCtx: null, error: action.payload });
  }
  else if (action.type === 'SIGNOUT_SUCCESS') {
    return createState(state, { userCtx: null, error: null });
  }

  return state;
};


export default session;
