import React from 'react';

const InputField = ({ searchInput, handleChange }) => {
  return (
    <input
      className="searchbar__input"
      value={searchInput}
      placeholder={'Wyszukaj po nazwie miejsca..'}
      onChange={handleChange}
    />
  );
};

export default InputField;
