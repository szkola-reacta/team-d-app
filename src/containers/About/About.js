import React from 'react';
import './style.scss';
import { ContributorItem } from '../../components/Contributor/ContributorItem';

function About() {
  return (
    <div className="About">
      <h2 className="About">About us</h2>
      <ContributorItem />
    </div>
  );
}

export default About;
