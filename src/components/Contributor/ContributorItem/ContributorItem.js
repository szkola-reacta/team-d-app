import React from 'react';
import { ContributorImage } from './ContributorImage';
import { ContributorDetails } from './ContributorDetails';
import './style.scss';

function ContributorItem({ contributor }) {
  return (
    <div className="ContributorItem">
      <ContributorImage photo={contributor.photo_url} />
      <ContributorDetails
        name={contributor.name}
        surname={contributor.surname}
        description={contributor.description}
        gitHubLink={contributor.link.github}
        linkedInLink={contributor.link.linkedin}
        websiteLink={contributor.link.portfolio}
      />
    </div>
  );
}

export default ContributorItem;
