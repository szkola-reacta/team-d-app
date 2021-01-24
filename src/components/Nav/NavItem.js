import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, linkName, navLinkClass, menuState }) {
  return (
    <li className="Nav__NavItem">
      <NavLink
        onClick={() => menuState(false)}
        to={to}
        className={navLinkClass}
      >
        {linkName}
      </NavLink>
    </li>
  );
}

export default NavItem;
