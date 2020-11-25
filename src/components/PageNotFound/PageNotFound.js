import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageNotFound = ({ path }) => {
  return (
    <>
      <div className="pageNotFound__opacity"></div>
      <div className="pageNotFound__info">
        <div className="pageNotFound__text">
          <h2>Looks like you got lost</h2>
          <h3>
            Don't worry, the way home goes
            <span className="pageNotFound__link">
              <Link to={path}>this way</Link>
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
