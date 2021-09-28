import React from 'react';

import './NavItem.scss';

function NavItem(props){
  return (
    <a className="nav-item" href={props.url}>{props.text}</a>
  )
}

export default NavItem
