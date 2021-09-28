import React, {useState} from 'react';
import NavItem from './NavItem';

import './Navbar.scss';

//const links = [];

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav id="navbar">
      <NavItem url="http://example.com" text="example" />
      <div className="dropdown-controller" onClick={handleClick}>
      Dropdown controller 1

        {isOpen && <div className="dropdown-content">
        Dropdown content 1
        </div>}
      </div>
    </nav>
  )
}

export default Navbar
