import React from 'react';

export default function ContributorImage({ photo }) {
  return (
    <div className="profile__imageWrapper">
      <img className="profile__img" src={photo} alt="contributor profile" />
    </div>
  );
}
