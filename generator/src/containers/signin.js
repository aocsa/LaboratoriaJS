'use strict';

import React from 'react';
import Navbar from '../components/navbar';

/*
  SignIn
  ------
  This container allows to handle the login page of the application.
*/

export default class SignIn extends React.Component {

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    if (email && password) {
      this.props.signIn(email, password);
    }

    return false;
  }

  render() {

    const formStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    };

    return (
      <div className="app">
        <Navbar/>
        <div className="container" style={{width: '100%', height: '60vh'}}>
          <div className="signin" style={formStyle}>
            <form onSubmit={this.handleSubmit} style={{width: '90%', maxWidth: '300px', backgroundColor: '#e1e1e1', padding: '14px'}}>

              <input ref="email" type="email" placeholder="Email" style={{backgroundColor:'white'}}/>
              <input ref="password" type="password" placeholder="Contraseña"  style={{backgroundColor:'white'}}/>
              <button style={{width: '100%'}}>Ingresar</button>
              <button type="button" style={{width: '100%', backgroundColor: 'transparent', textTransform: 'none', border: 'none' }}>Olvidaste tu contraseña?</button>

              {(this.props.error && this.props.error.response) && <div className="error">
                {this.props.error.response.data.message}
              </div>}

            </form>
          </div>
        </div>
      </div>
    );
  }
}
