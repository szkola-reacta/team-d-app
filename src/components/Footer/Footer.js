import React from 'react';

import NavList from 'components/Nav/NavList';
import { FooterBreak, FooterSection, SocialLink } from 'components/Footer';
import { ReactComponent as GitHub } from 'assets/github.svg';

import './style.scss';

const REPO_URL = 'https://github.com/szkola-reacta/team-d-app';
const COPYRIGHT = `Copyright © 2020 Szkoła Reacta's Team D. All Rights Reserved.`;

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__firstRow">
        <FooterSection title="Menu" narrow>
          <NavList navListClass="Footer__menu" navLinkClass="Footer__link" />
        </FooterSection>
        <FooterSection title="About us">
          <p className="Footer__paragraph">
            Satoshi Nakamoto launched lots of decentralisation when Litecoin
            required many decentralised application, for Augur limited some
            public key behind lots of multi signature. Blockchain thought some
            robust smart contract in a algorithm!
          </p>
        </FooterSection>
        <FooterSection title="Third footer section">
          <p className="Footer__paragraph">
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds, to
            seek out new life and new civilizations, to boldly go where no man
            has gone before.
          </p>
        </FooterSection>
        <FooterSection title="Social links" narrow>
          <SocialLink to={REPO_URL} Icon={GitHub} />
        </FooterSection>
      </div>
      <FooterBreak />
      <div className="Footer__secondRow">{COPYRIGHT}</div>
    </footer>
  );
}

export default Footer;
