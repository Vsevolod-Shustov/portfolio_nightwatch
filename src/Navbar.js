import React, {useState} from 'react';

import './Navbar.scss';

//const links = [];

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const handleControllerClick = () => {
    setIsOpen(!isOpen);
    console.log('handleParentClick');
  }
  const handleContentClick = (e) => {
    e.stopPropagation();
    console.log('handleChildClick');
  }
  return (
    <nav id="navbar">
      <div className="dropdown-controller" onClick={handleControllerClick}>
      Features <span className="dropdown-status">{isOpen ? "^" : "v"}</span>

        {isOpen && <div className="dropdown-content" onClick={handleContentClick}>
        <a href="http://example.com">Rank Tracker</a>
        <a href="http://example.com">Reporting</a>
        <a href="http://example.com">Site Audit</a>
        </div>}
      </div>
      <a href="http://example.com">Enterprise</a>
      <a href="http://example.com">Pricing</a>
      <a href="http://example.com">Blog</a>
    </nav>
  )
}

export default Navbar
