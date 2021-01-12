import React, { useEffect, useState } from 'react';

import { PlaceList } from '../../components/PlaceList';
import { Searchbar } from '../../components/Searchbar';

const Places = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const getData = () => {
    fetch('./API/database.json')
      .then((response) => {
        if (response.ok) return response;
        throw new Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Searchbar places={places} />
      <PlaceList places={places} />
    </div>
  );
};

export default Places;
