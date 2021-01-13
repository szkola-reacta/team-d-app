import React from 'react';
import NavItem from './NavItem';
import './style.scss';

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
  {
    id: 4,
    linkName: 'add new place',
    path: '/place-form',
  },
];

function NavList({ navListClass, defaultClass, navLinkClass }) {
  return (
    <ul className={`${defaultClass} ${navListClass}`}>
      {List.map((el) => (
        <NavItem
          key={`link-${el.id}`}
          linkName={el.linkName}
          to={el.path}
          navLinkClass={navLinkClass}
        />
      ))}
    </ul>
  );
}

export default NavList;
