import React from 'react';
import { Header, Description, Photo } from './PlaceDetails';

import './style.css';
import { v4 as uuidv4 } from 'uuid';

const PlaceContainer = ({ apiData }) => {
  return (
    <section className="Card">
      {apiData.map((data) => (
        <div key={uuidv4()} className="Card__Container">
          <Header title={data.title} />
          <Photo photo={data.foto_url} />
          <Description
            rate={data.rate}
            address={data.address}
            city={data.city}
            description={data.description}
            price={data.price}
          />
        </div>
      ))}
    </section>
  );
};

export default PlaceContainer;
