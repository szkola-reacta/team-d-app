import React from "react";

const CloseButton = ({ clearInput }) => {
  return (
    <button className="searchbar__button" onClick={clearInput}>
      x
    </button>
  );
};

export default CloseButton;
