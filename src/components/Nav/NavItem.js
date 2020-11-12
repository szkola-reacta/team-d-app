import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, linkName }) {
  return (
    <li>
      <NavLink to={to}>{linkName}</NavLink>
    </li>
  );
}

export default NavItem;
