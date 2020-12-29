import React from 'react';

function ContributorLink({ link, name }) {
  return (
    <a className="contributor__socialMediaLink" href={link}>
      {name}
    </a>
  );
}

export default ContributorLink;
