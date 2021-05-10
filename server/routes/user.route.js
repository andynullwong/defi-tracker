/* eslint-disable no-console */
const router = require('express').Router();
const pool = require('../postgres');

router.get('/:id', (req, res) => {
  const sqlQuery = {
    name: 'fetch-username',
    text: 'SELECT username, email FROM users WHERE id = $1',
    values: [req.params.id],
  };

  pool.query(sqlQuery, (error, response) => {
    if (error) {
      console.log(error.stack);
    } else {
      res.send(response.rows[0]);
    }
  });
});

module.exports = router;
