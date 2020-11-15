import React from "react";

const ClearInput = ({ clearInput }) => {
  return (
    <button className="searchbar__button" onClick={clearInput}>
      x
    </button>
  );
};

export default ClearInput;
