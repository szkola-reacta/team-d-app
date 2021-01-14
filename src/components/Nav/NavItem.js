import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem(props) {
  const { to, linkName, navLinkClass } = props;
  return (
    <li className="Nav__NavItem">
      <NavLink to={to} className={navLinkClass}>
        {linkName}
      </NavLink>
    </li>
  );
}

export default NavItem;
