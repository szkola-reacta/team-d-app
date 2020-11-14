import React from 'react';

import { ReactComponent as GitHub } from '../../assets/github.svg';
import './style.css';

function Footer() {
    return (
        <footer>
            <div className="firstRow">
                <div className="narrowColumn">
                    <h3>Menu</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Places</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>About us</h3>
                    <p>
                        Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature. Blockchain thought some robust smart contract in a algorithm!
                    </p>
                </div>
                <div className="column">
                    <h3>Third section</h3>
                    <p>
                        Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.
                    </p>
                </div>
                <div className="column">
                    <h3>Social links</h3>
                    <div>
                        <GitHub className="icon" />
                        <GitHub className="icon" />
                        <GitHub className="icon" />
                    </div>
                </div>
            </div>
            <div className="break" />
            <div className="secondRow">Copyright © 2020 Szkoła Reacta's Team D. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;
