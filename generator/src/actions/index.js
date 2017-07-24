'use strict';
/*
  Application Actions
  ------------------
  Use this file to create new actions for the system, as an example we provide
  two type of actions, first one connects to Laboratoria API and the second one
  does a simple update action.

  Here is an example of a plain action:

  export const updateSelectedCampuses = (campus) => ({
    type: 'UPDATE_SELECTED_CAMPUS',
    payload: campus
  });

  We are going to use in this example an action that calls the API to get all available
  sprints. Notice that this action uses a simple version of cache in case you don't
  need it you can remove it and call directly the dispatch

  export const fetchSprints = () => (dispatch, getState) => {
    dispatch({
      type: 'API_REQUEST',
      payload: {
        id: 'FETCH_SPRINTS',
        path: '/sprints',
        method: 'GET'
      }
    });
  };

*/

  // Resets the currently visible error message.
  export const resetErrorMessage = () => ({
    type: 'RESET_ERROR_MESSAGE'
  });


  export const loadSession = () => ({
    type: 'API_REQUEST',
    payload: {
      id: 'LOAD_SESSION',
      path: '/_session',
      method: 'GET'
    }
  });


  export const signIn = (email, password)  => (dispatch, getState) => {

    if (getState().session.isSignedIn) {
      return null;
    }

    dispatch({
      type: 'API_REQUEST',
      payload: {
        id: 'SIGNIN',
        path: '/_session',
        method: 'POST',
        payload: { email, password }
      }
    });
  };

  export const signOut = () => ({
    type: 'API_REQUEST',
    payload: {
      id: 'SIGNOUT',
      path: '/_session',
      method: 'DELETE'
    }
  });

  export const fetchSprints = () => (dispatch, getState) => {

    const lastLoaded = getState().sprintsReducer.lastLoaded || 0;

    if (Date.now() - lastLoaded > 30*60*1000) {
      dispatch({
        type: 'API_REQUEST',
        payload: {
          id: 'FETCH_SPRINTS',
          path: '/sprints',
          method: 'GET'
        }
      });
    }
  };
