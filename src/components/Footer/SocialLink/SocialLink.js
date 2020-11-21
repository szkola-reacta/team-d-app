import React from 'react';

import './style.css';

function SocialLink({ to, Icon }) {
  return (
    <a href={to} target='_blank' rel='noopener noreferrer'>
      <Icon className='socialLink__icon' />
    </a>
  );
}

export default SocialLink;
