import React from 'react';

import { Place } from 'components/Place';
import './style.scss';

const PlaceList = ({ places }) => {
  return (
    <div>
      <div className="PlaceList">
        {places.map((data) => (
          <Place key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
