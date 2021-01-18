import React from 'react';

export default function ContributorImage({ photo }) {
  return (
    <div className="ContributorItem__ContributorImage">
      <img
        className="ContributorItem__image"
        src={photo}
        alt="contributor profile"
      />
    </div>
  );
}
