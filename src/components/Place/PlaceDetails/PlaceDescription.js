import React from 'react';

const CURRENCY_NAME = "zł";

const PlaceDescription = ({ address, city, description, price, rate }) => {
    return (
        <div className="Place__Description">
            <p className="Place__Item"><i class="fas fa-star"></i> {rate}</p>
            <p className="Place__Item">{description}</p>
            <p className="Place__Item">- {address}, {city}</p>
            <p className="Place__Item">- {price} {CURRENCY_NAME}</p>
        </div>
    );
}

export default PlaceDescription;