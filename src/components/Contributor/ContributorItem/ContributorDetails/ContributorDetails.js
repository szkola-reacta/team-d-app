import React from 'react';
import ContributorName from './ContributorName';
import ContributorBio from './ContributorBio';
import ContributorLink from './ContributorLink';

function ContributorDetails(props) {
  const { name, description, gitHubLink, linkedInLink, websiteLink } = props;
  return (
    <article className="contributor__details">
      <ContributorName name={name} />
      <ContributorBio description={description} />
      <ContributorLink link={gitHubLink} name="Github" />
      <ContributorLink link={linkedInLink} name="LinkedIn" />
      <ContributorLink link={websiteLink} name="Website" />
    </article>
  );
}

export default ContributorDetails;
