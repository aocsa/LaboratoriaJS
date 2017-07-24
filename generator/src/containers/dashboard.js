'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { fetchSprints } from '../actions';

const internals = {}

internals.items = (sprints) => {
  return sprints.map(sprint => {
    return (
      <div key={sprint.id}>
        <h2>{sprint.name}</h2>
        <p>{sprint.description}</p>
        <br/><br/>
      </div>
    );
  });
}

internals.processSprints = (sprints) => {
  const campuses = Object.keys(sprints);
  return campuses.map(campus => {
    const items = internals.items(sprints[campus].sprints);
    return (
      <div key={campus}>
        <h1>{campus}</h1>
        <hr/><br/>
        {items}
      </div>
    );
  });
}

/*
  Dashboard container
  -------------------
  This is an example container that will help you understand the React flow.
  You can modify it for your application at your will.

  A container normally is a react component that has several other components and
  handles events and process information before render it to the page. In single
  page application we use the container to represent each page of the application
  but a container is not limited to that.

  This container fetch the sprint information from the API and render it group by campus

*/
class Dashboard extends React.Component {

  //This is call when the class is created use here to bind events
  constructor(props) {
    super(props);
  }

  //This will be call every time the container is mounted, normally is done once
  componentWillMount() {
    this.props.fetchSprints();
  }

  //Renders the information fetch from the API
  render() {

    if (!this.props.lastLoaded) {
      return null;
    }

    const sprintItems = internals.processSprints(this.props.sprints);

    return (
      <div className="app">
        <Navbar/>
        <div className="container">
          {sprintItems}
        </div>
      </div>
    )
  }
}

// This function allow you to select what parts of the state you need in this container
const mapStateToProps = (state, ownProps) => ({
  lastLoaded: state.sprintsReducer.lastLoaded,
  sprints: state.sprintsReducer.sprints
});

// This function allows you to select what action do you need in this container
const mapDispatchToProps = {
  fetchSprints
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
