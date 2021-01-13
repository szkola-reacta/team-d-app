import React from 'react';
import { ContributorImage } from './ContributorImage';
import { ContributorDetails } from './ContributorDetails';
import './style.scss';
import profilePhoto from '../../../assets/photo/norbert.jpg';

function ContributorItem() {
  return (
    <div className="ContributorItem">
      <ContributorImage photo={profilePhoto} />
      <ContributorDetails
        name="Norbert Wronski"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto blanditiis
        commodi rerum mollitia molestiae illum nostrum numquam at sunt cum."
        gitHubLink="https://github.com"
        linkedInLink="https://linkedIn.com"
        websiteLink="https://linkedIn.com"
      />
    </div>
  );
}

export default ContributorItem;
