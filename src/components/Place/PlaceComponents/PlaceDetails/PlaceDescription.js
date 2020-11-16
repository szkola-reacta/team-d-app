import React from 'react';

const CURRENCY_NAME = "zł"

const PlaceDescription = ({address, city, description, price, rate}) => {

return ( <div className="Card__Container__description">
    <p className="Card__Container__description__item"><i class="fas fa-star"></i> {rate}</p>
    <p className="Card__Container__description__item">{description}</p>
    <p className="Card__Container__description__item">- {address}, {city}</p>
    <p className="Card__Container__description__item">- {price} {CURRENCY_NAME}</p>
</div> );
}

export default PlaceDescription;