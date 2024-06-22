import React from 'react';
import AddRoute from './components/AddRoute';
import RouteTable from './components/RouteTable';
import DeadEndCities from './components/DeadEndCities';

function App() {
  return (
    <div className="App">
      <h1>City Routes</h1>
      <AddRoute />
      <RouteTable />
      <DeadEndCities />
    </div>
  );
}

export default App;

