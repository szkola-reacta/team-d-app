import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className="Home">
      <h2>
        It is super easy to do! Just check our best{' '}
        <NavLink to="/places" className="Home__link">
          places
        </NavLink>{' '}
        and choose one for you!
      </h2>
    </div>
  );
}

export default Home;
