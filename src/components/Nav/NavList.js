import React from 'react';
import NavItem from './NavItem';
import './style.css';

const List = [
  {
    id: 1,
    linkName: 'home',
    path: '/',
  },
  {
    id: 2,
    linkName: 'about',
    path: '/about',
  },
  {
    id: 3,
    linkName: 'places',
    path: '/places',
  },
];

function NavList({ navListClass, defaultClass }) {
  return (
    <ul className={`${defaultClass} ${navListClass}`}>
      {List.map((el) => (
        <NavItem
          key={`link-${el.id}`}
          linkName={el.linkName}
          to={el.path}
          navLinkClass="navLinkDefault"
        />
      ))}
    </ul>
  );
}

export default NavList;
