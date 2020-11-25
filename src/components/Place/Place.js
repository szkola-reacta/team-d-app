import React from 'react';

import { PlaceDescription, PlaceHeader, PlaceImage } from './PlaceDetails';
import './style.css';

const Place = ({ data }) => {
    return (
        <div className="Place">
            <PlaceImage photo={data.foto_url}/>
            <PlaceHeader title={data.title} subtitle={`${data.address}, ${data.city}`} />
            <PlaceDescription rate={data.rate} address={data.address} city={data.city} description={data.description} price={data.price} />
        </div>
    )
}

export default Place;