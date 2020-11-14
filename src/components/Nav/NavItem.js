import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, linkName }) {
  return (
    <li className="navItem">
      <NavLink to={to} className="navLink">
        {linkName}
      </NavLink>
    </li>
  );
}

export default NavItem;
