/* eslint-disable no-console */
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/wallet/:address', (req, res) => {
  const yieldwatch = 'https://www.yieldwatch.net/api/all';
  const { address } = req.params;
  const platforms = ['beefy'];

  const url = `${yieldwatch}/${address}?platforms=${platforms.join()}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => res.send(json));
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
