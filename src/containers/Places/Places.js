import React, { useEffect, useState } from 'react';

import { PlaceList } from '../../components/PlaceList';
import { Searchbar } from '../../components/Searchbar';
import './style.scss';

/**
 * backup database
 *   fetch('./API/database.json')
 */

const Places = () => {
  const [places, setPlaces] = useState([]);

  const getData = () => {
    fetch('https://private-869c1-teamd.apiary-mock.com/places')
      .then((response) => {
        if (response.ok) return response;
        throw new Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data.places);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Places">
      <Searchbar places={places} />
      <h2 className="Places">All beautiful places</h2>
      {places && <PlaceList places={places} />}
    </div>
  );
};

export default Places;
