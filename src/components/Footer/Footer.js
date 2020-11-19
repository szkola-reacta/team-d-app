import React from 'react';

import { FooterBreak, FooterSection, SocialLink } from 'components/Footer';
import { ReactComponent as GitHub } from 'assets/github.svg';
import './style.css';

const REPO_URL = 'https://github.com/szkola-reacta/team-d-app';
const COPYRIGHT = `Copyright © 2020 Szkoła Reacta's Team D. All Rights Reserved.`;

// use Nav component in Footer as well
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__firstRow">
                <FooterSection title="Menu" narrow>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Places</li>
                    </ul>
                </FooterSection>
                <FooterSection title="About us">
                    <p className="footer__paragraph">
                        Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature. Blockchain thought some robust smart contract in a algorithm!
                    </p>
                </FooterSection>
                <FooterSection title="Third footer section">
                    <p>
                        Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.
                    </p>
                </FooterSection>
                <FooterSection title="Social links" narrow>
                    <SocialLink to={REPO_URL} Icon={GitHub} />
                </FooterSection>
            </div>
            <FooterBreak />
            <div className="footer__secondRow">{COPYRIGHT}</div>
        </footer>
    );
}

export default Footer;
