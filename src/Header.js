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
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item login-button">Login</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item signup-button">Sign Up Free</a>
      <button className="navbar-mobile-toggle mobile">button</button>
    </header>
  )
}

export default Header;
