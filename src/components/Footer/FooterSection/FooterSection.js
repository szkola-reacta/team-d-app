import React from 'react';

import './style.css';

function FooterSection({ title, children, narrow }) {
  return (
    <div className={`footerSection ${narrow && 'footerSection--narrow'}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default FooterSection;
