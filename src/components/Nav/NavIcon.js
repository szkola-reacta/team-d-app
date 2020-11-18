import React from 'react';

function NavIcon({ icon, onClick }) {
  return (
    <div className="navIconWrapper">
      <img
        src={icon}
        onClick={onClick}
        alt="menu icon"
        className="navIconImg"
      />
    </div>
  );
}

export default NavIcon;
