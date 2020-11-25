import React from 'react';

import { PlaceHeader, PlaceDescription, PlacePhoto } from './PlaceDetails';
import './style.css';

const Place = ({ data }) => {
    return (
        <div className="Place">
            <PlaceHeader title={data.title} />
            <PlacePhoto photo={data.foto_url}/>
            <PlaceDescription rate={data.rate} address={data.address} city={data.city} description={data.description} price={data.price} />
        </div>
    )
}

export default Place;