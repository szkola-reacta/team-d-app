import React from 'react';

const ClearInput = ({ clearInput }) => {
  return (
    <button className="Searchbar__ClearInput" onClick={clearInput}>
      x
    </button>
  );
};

export default ClearInput;
