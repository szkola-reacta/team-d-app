import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const PageNotFound = ({ path }) => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__opacity"></div>
      <div className="PageNotFound__info">
        <div className="PageNotFound__text">
          <h2>Looks like you got lost</h2>
          <h3>
            Don't worry, the way home goes
            <span className="PageNotFound__link">
              <Link to={path}>this way</Link>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
