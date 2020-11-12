import React from 'react';
import NavItem from './NavItem';

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

function NavList() {
  return (
    <ul>
      {List.map((el) => (
        <NavItem key={`link-${el.id}`} linkName={el.linkName} to={el.path} />
      ))}
    </ul>
  );
}

export default NavList;
