import React, { useState } from 'react';
import InputField from './InputField';
import ClearButton from './ClearButton';
import { PlaceList } from '../PlaceList';
import './style.scss';

const Searchbar = ({ places }) => {
  const [searchInput, setSearchInput] = useState('');
  const [attractionList, setAttractionList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setAttractionList(places);
  };

  const clearInput = (e) => {
    setSearchInput('');
  };

  const locationList = attractionList.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="Searchbar">
      <div className="Searchbar__inputContainer">
        <InputField searchInput={searchInput} handleChange={handleChange} />
        <ClearButton clearInput={clearInput} />
      </div>
      {searchInput.length !== 0 && (
        <div className="Searchbar__resultsContainer">
          <h2 className="Searchbar">Search results</h2>
          <PlaceList places={locationList} />
        </div>
      )}
    </div>
  );
};

export default Searchbar;
