import React, {useState} from 'react';

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav id="navbar">
      <div id="dropdown-controller" onClick={handleClick}>
      Dropdown controller
      </div>
      {isOpen && <div id="dropdown-content">
      Dropdown content
      </div>}
    </nav>
  )
}

export default Navbar
