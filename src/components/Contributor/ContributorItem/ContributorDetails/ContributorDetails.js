import React from 'react';
import ContributorName from './ContributorName';
import ContributorBio from './ContributorBio';
import ContributorLink from './ContributorLink';
import LinkWrapper from './LinkWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ContributorDetails(props) {
  const { name, description, gitHubLink, linkedInLink, websiteLink } = props;
  return (
    <article className="contributor__details">
      <ContributorName name={name} />
      <ContributorBio description={description} />
      <LinkWrapper>
        <ContributorLink link={gitHubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </ContributorLink>
        <ContributorLink link={linkedInLink}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </ContributorLink>
        <ContributorLink link={websiteLink}>
          <FontAwesomeIcon icon={faGlobe} />
        </ContributorLink>
      </LinkWrapper>
    </article>
  );
}

export default ContributorDetails;
