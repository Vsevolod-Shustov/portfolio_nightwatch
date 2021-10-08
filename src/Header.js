import React from 'react';
import Navbar from './Navbar'

import './_variables.scss';
import './Header.scss';
import Logo from '../public/images/logo.svg'

function Header(){
  return (
    <header id="header">
      <a href="#" className="home-link">
        <img src={Logo} className="logo" alt="logo" />
      </a>
      <Navbar />
    </header>
  )
}

export default Header;
