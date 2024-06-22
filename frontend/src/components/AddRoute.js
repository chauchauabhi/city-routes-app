import React, { useState } from 'react';
import axios from 'axios';

const AddRoute = () => {
  const [origin, setOrigin] = useState('');
  const [dest, setDest] = useState('');

  const addRoute = () => {
    axios.post('/api/route', { origin, dest })
      .then(() => {
        setOrigin('');
        setDest('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Add Route</h2>
      <div>
        Origin City: <input value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </div>
      <div>
        Destination City: <input value={dest} onChange={(e) => setDest(e.target.value)} />
      </div>
      <button onClick={addRoute}>Add</button>
    </div>
  );
};

export default AddRoute;

