import React from 'react';

function ContributorItem() {
  return (
    <div className="contributor">
      <div className="contributor__profile">
        <img className="contributor__img" src="#" alt="contributor profile" />
      </div>
      <article className="contributor__details">
        <h2>Name Surname</h2>
        <p className="contributor__bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          blanditiis commodi rerum mollitia molestiae illum nostrum numquam at
          sunt cum.
        </p>
        <a className="contributor__socialMediaLink" href="https://github.com">
          Github
        </a>
        <a className="contributor__socialMediaLink" href="https://linkedIn.com">
          LinkedIn
        </a>
        <a className="contributor__socialMediaLink" href="https://linkedIn.com">
          Website
        </a>
      </article>
    </div>
  );
}

export default ContributorItem;
