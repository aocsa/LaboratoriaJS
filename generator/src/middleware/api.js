import Axios from 'axios';

/*
  Do not change this unless the API has change position
*/
const internals = {
  baseUrl: 'http://api.laboratoria.la'
};

/*
  By default the API project runs on port 3001 in your localhost machine, change
  it if you have change something of your local API project
*/
if (process.env.NODE_ENV !== 'production') {
  internals.baseUrl = 'http://lvh.me:3001';
}

/*
  API Middleware
  ---------------
  This API Middleware intercepts any action that is related to the API and defines
  3 new states (PENDING, SUCCESS, FAILURE). It starts with PENDING state and depending
  on the API response the new action can be SUCESS or FAILURE
*/
export default store => next => action => {

  if (action.type !== 'API_REQUEST') {
    return next(action);
  }

  const id = action.payload.id;

  const options = {
    method: action.payload.method,
    url: internals.baseUrl + action.payload.path,
    withCredentials: true
  };

  if (action.payload.payload) {
    options.data = action.payload.payload;
  }

  next({ type: id + '_PENDING' });

  return Axios(options)
    .then(response => {

      next({
        type: id + '_SUCCESS',
        payload: response.data
      });
    })
    .catch(err => {

      next({
        type: id + '_FAILURE',
        payload: err
      });
    });
};
