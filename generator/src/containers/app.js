'use strict';


import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { resetErrorMessage, loadSession, signIn, signOut } from '../actions';
import SignIn from './signin';
import Dashboard from './dashboard';

/*
  App container
  --------------
  We use this container to create new routes, if you need to add a new route create it here
  use the privateRoute function if you need to a private route (ask for login).

  In this example Dashboard is private and requires a login to enter, check Laboratoria API's
  to create one:

  curl -iv -X POST \
    -H "Content-Type: application/json" \
    -d '{"email":"you@somewhere.com","password":"secret"}' \
    http://127.0.0.1:3001/_users

 If you need to create a public page you can do it like this:

 <Router>
   <Switch>
     <Route exact path="/" render={() => (
       <Dashboard/>
     )} />
   </Switch>
 </Router>

 Use an standard Route instead of the PrivateRoute and added to the Switch.

*/

const PrivateRoute = ({ component: Component, userCtx, signOut, path, exact }) => (
  <Route path={path} exact={exact} render={ props => (
    <div>
      {userCtx && userCtx.name ?
        <Component userCtx={userCtx} {...props} /> :
        <Redirect to="/signin" />}
    </div>
  )}/>
);

class App extends React.Component {

  componentWillMount() {
    this.props.loadSession();
  }

  render() {
    console.log(this.props);
    const { userCtx, error } = this.props.session;

    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} userCtx={userCtx} signOut={this.props.signOut} />
          <Route path="/signin" render={() => (
            <div>
            {userCtx && userCtx.name ?
              <Redirect to="/" /> :
              <SignIn signIn={this.props.signIn} error={error} />}
            </div>
          )} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
  session: state.session
});


const mapDispatchToProps = {
  resetErrorMessage,
  loadSession,
  signIn,
  signOut
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
