import React from 'react';

import './style.scss';

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const PlaceImage = ({ photo }) => {
  return (
    <img className="Place__PlaceImage" src={photo || PLACEHOLDER} alt="" />
  );
};

export default PlaceImage;
