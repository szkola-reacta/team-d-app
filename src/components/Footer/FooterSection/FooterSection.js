import React from 'react';

import './style.scss';

function FooterSection({ title, children, narrow }) {
  return (
    <div className={`FooterSection ${narrow && 'FooterSection--narrow'}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default FooterSection;
