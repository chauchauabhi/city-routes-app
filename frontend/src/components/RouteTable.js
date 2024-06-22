import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RouteTable = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get('/api/routes')
      .then(res => setRoutes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Route Table</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route.origin} -> {route.dest}</li>
        ))}
      </ul>
    </div>
  );
};

export default RouteTable;

