'use strict';

/*
  Default state assigned to the reducer
*/
const defaults = {
  lastLoaded: false,
  sprints: []
};

/*
  This fucntion process the sprint information from the API and group it by campus
*/
const processSprints = sprints => {

  return sprints.reduce((memo,row) => {

    const campus = row.campus;

    if (!memo[campus]) {
      memo[campus] = {
        sprints: []
      };
    }

    memo[campus].sprints.push({
      id: row.sprint,
      type: row.type,
      name: row.name,
      description: row.description,
      tags: row.tags
    });

    return memo;

  },{});
}

/*
  Sprint example reducer
  -----------------------
  A reducer is function to process an action dispatch so the ultimate goal of a
  reducer is to produce a new state. So if you need to process data you can do it
  here before the new state is returned.
*/
const sprintsReducer = (state = defaults, action) => {
  let newState = state;
  switch (action.type) {
    case 'FETCH_SPRINTS_PENDING':
      newState = Object.assign({}, state, { lastLoaded: 0 });
      break;
    case 'FETCH_SPRINTS_FAILURE':
      newState = Object.assign({}, state, { lastLoaded: Date.now(), error: action.payload });
      break;
    case 'FETCH_SPRINTS_SUCCESS':
      newState = Object.assign({}, state, { lastLoaded: Date.now(), sprints: processSprints(action.payload) });
      break;
  }
  return newState;
};

export default sprintsReducer;
