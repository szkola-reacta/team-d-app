import React from 'react';

const CURRENCY_NAME = 'zł';

const PlaceDescription = ({ description, price, rate }) => {
  return (
    <div className="Place__PlaceDescription">
      <div className="Place__Section">
        <p className="Place__Item">
          <i className="fas fa-star"></i> {rate}
        </p>
        <p className="Place__Item">
          <i className="fas fa-wallet"></i> {price} {CURRENCY_NAME}
        </p>
      </div>
      <div className="Place__Section">
        <p className="Place__Item">{description}</p>
      </div>
    </div>
  );
};

export default PlaceDescription;
