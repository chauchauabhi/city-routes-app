import React, { useState } from 'react';
import axios from 'axios';

const DeadEndCities = () => {
  const [deadEndCities, setDeadEndCities] = useState([]);

  const findDeadEndCities = () => {
    axios.get('/api/deadendCities')
      .then(res => setDeadEndCities(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Dead End Cities</h2>
      <button onClick={findDeadEndCities}>Find DeadEnd cities</button>
      <ul>
        {deadEndCities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeadEndCities;

