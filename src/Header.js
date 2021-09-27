import React from 'react';
import Navbar from './Navbar'

import Logo from '../public/logo.svg'

function Header(){
  return (
    <header id="header">
      <img src={Logo} />
      Header
      <Navbar />
    </header>
  )
}

export default Header;
