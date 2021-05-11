import express from 'express';
import pool from '../postgres';

const router = express.Router();

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

export default router;
