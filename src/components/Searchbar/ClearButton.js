import React from 'react';

const ClearButton = ({ clearInput }) => {
  return (
    <button className="Searchbar__ClearButton" onClick={clearInput}>
      x
    </button>
  );
};

export default ClearButton;
