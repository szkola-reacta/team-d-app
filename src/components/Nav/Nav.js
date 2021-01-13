import React, { useState } from 'react';
import NavList from './NavList';
import NavIcon from './NavIcon';
import Logo from './Logo';
import cross from './assets/menu-o.svg';
import hamburger from './assets/menu-c.svg';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="Nav">
      <Logo />
      <NavIcon icon={isActive ? cross : hamburger} onClick={handleClick} />
      <NavList
        defaultClass="Nav__listDefault"
        navListClass={isActive ? 'Nav__listActive' : 'Nav__listHidden'}
        navLinkClass="Nav__linkDefault"
      />
    </nav>
  );
}

export default Nav;
