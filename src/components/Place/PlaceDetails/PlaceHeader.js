import React from 'react';

const PlaceHeader = ({ title, subtitle }) => {
    return (
        <div className="Place__PlaceHeader">
            <div className="Place__Title">{title}</div>
            <div className="Place__Subtitle">{subtitle}</div>
        </div>
    );
}

export default PlaceHeader;