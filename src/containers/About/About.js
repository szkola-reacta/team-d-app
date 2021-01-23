import React from 'react';
import './style.scss';
import { ContributorList } from '../../components/Contributor/ContributorList';

function About() {
  return (
    <div className="About">
      <h2 className="About">About us</h2>
      <ContributorList />
    </div>
  );
}

export default About;
