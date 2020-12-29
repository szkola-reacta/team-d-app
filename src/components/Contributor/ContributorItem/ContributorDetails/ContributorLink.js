import React from 'react';

function ContributorLink({ link, children }) {
  return (
    <a className="contributor__socialMediaLink" href={link}>
      {children}
    </a>
  );
}

export default ContributorLink;
