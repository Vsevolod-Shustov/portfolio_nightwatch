import React, {useState} from 'react';

import './Navbar.scss';

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
      <div className="dropdown-controller nav-item" onClick={handleControllerClick}>
      Features <span className="dropdown-status">{isOpen ? "^" : "v"}</span>

        {isOpen && <div className="dropdown-content" onClick={handleContentClick}>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Rank Tracker</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Reporting</a>
        <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Site Audit</a>
        </div>}
      </div>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Enterprise</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Pricing</a>
      <a href="http://example.com" target="_blank" rel="noreferrer" className="nav-item">Blog</a>
    </nav>
  )
}

export default Navbar
