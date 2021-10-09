import React, {useState} from 'react';

import styles from './Navbar.scss';

function Navbar(){
  const [isDropdown1Open, setisDropdown1Open] = useState(false);
  const handleDropdown1ControllerClick = () => {
    setisDropdown1Open(!isDropdown1Open);
    console.log('handleParentClick');
  }
  const handleDropdown1ContentClick = (e) => {
    e.stopPropagation();
    console.log('handleChildDropdown1Click');
  }

  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const handleMobileMenuControllerClick = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
    console.log('handleMobileMenuControllerClick');
  }
  return (
    <>
    <nav id={styles.navbar} className={isMobileMenuOpen ? styles.open : styles.closed}>
      <div className={styles.dropdown_controller} onClick={handleDropdown1ControllerClick}>
        <span className={styles.nav_item}>Features <span className={styles.dropdown_status}>{isDropdown1Open ? "^" : "v"}</span></span>

        {isDropdown1Open && <div className={styles.dropdown_content} onClick={handleDropdown1ContentClick}>
        <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Rank Tracker</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Reporting</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Site Audit</a>
        </div>}
      </div>
      <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Enterprise</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Pricing</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className={styles.nav_item}>Blog</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className={`${styles.nav_item} ${styles.login_button}`}>Login</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className={`${styles.nav_item} ${styles.signup_button}`}>Sign Up Free</a>
    </nav>
    <div className={`${styles.navbar_mobile_toggle} ${styles.mobile}`} onClick={handleMobileMenuControllerClick}>&equiv;</div>
    </>
  )
}

export default Navbar
