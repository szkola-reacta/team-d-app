import React from 'react';

const CURRENCY_NAME = 'zł';

const PlaceDescription = ({ address, city, description, price, rate }) => {
  return (
    <div className="Card__Description">
      <p className="Card__Item">
        <i class="fas fa-star"></i> {rate}
      </p>
      <p className="Card__Item">{description}</p>
      <p className="Card__Item">
        - {address}, {city}
      </p>
      <p className="Card__Item">
        - {price} {CURRENCY_NAME}
      </p>
    </div>
  );
};

export default PlaceDescription;
