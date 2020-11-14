import React from 'react';

import { Break, FooterSection, SocialLink } from './';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import './style.css';

function Footer() {
    return (
        <footer>
            <div className="firstRow">
                <FooterSection className="narrowColumn" title="Menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Places</li>
                    </ul>
                </FooterSection>
                <FooterSection className="column" title="About us">
                    <p>
                        Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature. Blockchain thought some robust smart contract in a algorithm!
                    </p>
                </FooterSection>
                <FooterSection className="column" title="Third footer section">
                    <p>
                        Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.
                    </p>
                </FooterSection>
                <FooterSection className="narrowColumn" title="Social links">
                    <SocialLink to="https://github.com/szkola-reacta/team-d-app" Icon={GitHub} />
                </FooterSection>
            </div>
            <Break />
            <div className="secondRow">Copyright © 2020 Szkoła Reacta's Team D. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;
