import React, {useState} from 'react';

import './Navbar.scss';

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
    <nav id="navbar" className={isMobileMenuOpen ? "open" : "closed"}>
      <div className="dropdown-controller" onClick={handleDropdown1ControllerClick}>
        <span className="nav-item">Features <span className="dropdown-status">{isDropdown1Open ? "^" : "v"}</span></span>

        {isDropdown1Open && <div className="dropdown-content" onClick={handleDropdown1ContentClick}>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Rank Tracker</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Reporting</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Site Audit</a>
        </div>}
      </div>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Enterprise</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Pricing</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Blog</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item login-button">Login</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item signup-button">Sign Up Free</a>
    </nav>
    <div className="navbar-mobile-toggle mobile" onClick={handleMobileMenuControllerClick}>&equiv;</div>
    </>
  )
}

export default Navbar
