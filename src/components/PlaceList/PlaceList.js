import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Place } from 'components/Place';
import './style.css';

const PlaceList = ({ places }) => {
  return (
    <div>
      <div className="PlaceList">
        {places.map((data) => (
          <Place key={uuidv4()} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
