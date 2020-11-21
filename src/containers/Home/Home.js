import React from 'react';

import Searchbar from 'components/Searchbar/Searchbar.js';
import './style.css';

function Home() {
  return (
    <div className='Home'>
      <h2>Tourist attractions</h2>
      <Searchbar />
    </div>
  );
}

export default Home;
