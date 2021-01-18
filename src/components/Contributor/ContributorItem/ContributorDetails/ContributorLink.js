import React from 'react';

function ContributorLink({ link, children }) {
  return (
    <a className="ContributorItem__ContributorLink" href={link}>
      {children}
    </a>
  );
}

export default ContributorLink;
