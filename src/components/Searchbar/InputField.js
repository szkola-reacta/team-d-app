import React from 'react';

const InputField = ({ searchInput, handleChange }) => {
  return (
    <input
      className="Searchbar__InputField"
      value={searchInput}
      placeholder={'Search by place name...'}
      onChange={handleChange}
    />
  );
};

export default InputField;
