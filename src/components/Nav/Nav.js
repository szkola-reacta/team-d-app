import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isActive) {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.cssText = null;
    }
  }, [isActive]);

  return (
    <nav className="Nav">
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
