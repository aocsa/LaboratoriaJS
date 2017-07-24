'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

/*
  Navbar component
  ----------------
  This is the classic laboratoria Header use in our styleguide

*/
const Navbar = (props) => {
  return (
    <header className="nav">
      <div className="container">
        <div className="row flex-center">
          <div className="left col-4"></div>
          <div className="center col-4 text-center">
            <Link to="/" className="logo">
              <img alt="Laboratoria, código que transforma" src="/img/logo.svg"/>
            </Link>
          </div>
          <div className="right col-4 text-right">
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
