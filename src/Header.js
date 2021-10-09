import React from 'react';
import Navbar from './Navbar'

import './_variables.scss';
import styles from './Header.scss';
import Logo from '../public/images/logo.svg'

function Header(){
  return (
    <header id={styles.header}>
      <a href="#" className={styles.home_link}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </a>
      <Navbar />
    </header>
  )
}

export default Header;
