import React from 'react';

import './style.scss';

function SocialLink({ to, Icon }) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Icon className="SocialLink__icon" />
    </a>
  );
}

export default SocialLink;
