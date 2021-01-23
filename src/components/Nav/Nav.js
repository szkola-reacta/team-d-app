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
    <nav className={isActive ? 'Nav' : 'Nav Nav--listHidden'}>
      <Logo />
      <NavIcon icon={isActive ? cross : hamburger} onClick={handleClick} />
      <NavList
        defaultClass="Nav__listDefault"
        navListClass={isActive ? '--listActive' : '--listHidden'}
        navLinkClass="Nav__linkDefault"
        handleClick={handleClick}
      />
    </nav>
  );
}

export default Nav;
