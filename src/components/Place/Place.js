import React, { useEffect, useState } from 'react';

import { PlaceContainer } from './PlaceComponents';

const Place = () => {
    const [apiData, setApiData] = useState([]);

    const getData = () => {
        fetch('./API/database.json')
        .then(response => {
            if(response.ok) return response
            throw new Error(response.status)
        })
        .then(response => response.json())
        .then(data => {
            setApiData(data);
        })
    }

    useEffect(() => {
        getData();
        return () => {
        setApiData([]);
        }
    }, []);

    return <PlaceContainer apiData={apiData}/>;
}

export default Place;