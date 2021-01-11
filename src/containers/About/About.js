import React from 'react';
import './style.css';
import { ContributorItem } from '../../components/Contributor/ContributorItem';

function About() {
  return (
    <div className="about__container">
      <h2>about us</h2>
      <ContributorItem />
    </div>
  );
}

export default About;
