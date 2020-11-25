import React from 'react';

const CURRENCY_NAME = "zł";

const PlaceDescription = ({ address, city, description, price, rate }) => {
    return (
        <div className="PlaceDescription">
            <p className="PlaceDescription__Item"><i class="fas fa-star"></i> {rate}</p>
            <p className="PlaceDescription__Item">{description}</p>
            <p className="PlaceDescription__Item">- {address}, {city}</p>
            <p className="PlaceDescription__Item">- {price} {CURRENCY_NAME}</p>
        </div>
    );
}

export default PlaceDescription;