import React from 'react';
import "./style.css";

const PlacePhoto = ({photo}) => {
    return ( <div className="photoContent">
        <img src={photo} alt="image" className="photoContent__Item" />
    </div> );
}
 
export default PlacePhoto;