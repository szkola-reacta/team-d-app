import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function NavItem(props) {
  const { to, linkName, navLinkClass, handleClick } = props;

  return (
    <li className="Nav__NavItem">
      <NavLink to={to} className={navLinkClass} onClick={handleClick}>
        {linkName}
      </NavLink>
    </li>
  );
}

export default NavItem;
