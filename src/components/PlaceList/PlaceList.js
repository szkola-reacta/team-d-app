import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Place } from 'components/Place';
import './style.css';

const PlaceList = () => {
    const [places, setPlaces] = useState([]);

    const getData = () => {
        fetch('./API/database.json')
        .then(response => {
            if(response.ok) return response
            throw new Error(response.status)
        })
        .then(response => response.json())
        .then(data => {
            setPlaces(data);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="PlaceList">
            {places.map((data) => (
                <Place key={uuidv4()} data={data}/>
            ))}
        </div>
    );
}

export default PlaceList;