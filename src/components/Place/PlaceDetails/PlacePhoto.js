import React from 'react';

import './style.css';

const PlacePhoto = ({ photo }) => {
    return (
        <div className="Place__ImageContainer">
            <img className="Place__Image" src={photo} alt="" />
        </div>
    );
}

export default PlacePhoto;