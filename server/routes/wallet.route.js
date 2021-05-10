/* eslint-disable no-console */
const router = require('express').Router();
const fetch = require('node-fetch');
// const pool = require('../postgres');

router.get('/:address', (req, res) => {
  const yieldwatch = 'https://www.yieldwatch.net/api/all';
  const { address } = req.params;
  const platforms = ['beefy'];

  const url = `${yieldwatch}/${address}?platforms=${platforms.join()}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => res.send(json));
});

module.exports = router;
