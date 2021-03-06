import React, { useState, useEffect } from 'react';
import { ContributorItem } from '../ContributorItem';
import './style.scss';

function ContributorList() {
  const [contributors, setContributors] = useState([]);

  const getData = () => {
    fetch('API/contributors.json')
      .then((response) => {
        if (response.ok) return response;
        throw new Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ContributorList">
      {contributors ? (
        contributors.map((contributor, index) => (
          <ContributorItem key={index} contributor={contributor} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ContributorList;
