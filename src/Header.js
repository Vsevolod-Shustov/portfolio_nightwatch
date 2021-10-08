import React from 'react';
import Navbar from './Navbar'

import './_variables.scss';
import './Header.scss';
import Logo from '../public/images/logo.svg'

function Header(){
  return (
    <header id="header">
      <a href="#" className="home-link">
        <img src={Logo} className="logo" />
      </a>
      <Navbar />
      <div className="navbar-mobile-toggle mobile">&equiv;</div>
    </header>
  )
}

export default Header;
