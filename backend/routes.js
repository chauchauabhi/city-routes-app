const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = './db.json';

const readDB = () => {
  return JSON.parse(fs.readFileSync(path));
};

const writeDB = (data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

router.post('/route', (req, res) => {
  const { origin, dest } = req.body;
  const data = readDB();
  data.routes.push({ origin, dest });
  writeDB(data);
  res.status(201).send({ message: 'Route added' });
});

router.get('/deadendCities', (req, res) => {
  const data = readDB();
  const outgoingCities = new Set(data.routes.map(route => route.origin));
  const incomingCities = new Set(data.routes.map(route => route.dest));
  const deadEndCities = [...incomingCities].filter(city => !outgoingCities.has(city));
  res.status(200).send(deadEndCities);
});

router.get('/routes', (req, res) => {
  const data = readDB();
  res.status(200).send(data.routes);
});

module.exports = router;

