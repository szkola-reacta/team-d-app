import React from 'react';

function NavIcon({ icon, onClick }) {
  return (
    <div className="Nav__NavIcon">
      <img
        src={icon}
        onClick={onClick}
        alt="menu icon"
        className="Nav__iconImg"
      />
    </div>
  );
}

export default NavIcon;
