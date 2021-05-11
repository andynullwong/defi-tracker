/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import app from 'express';
import fetch from 'node-fetch';

const router = app.Router();

router.get('/:address', (req, res) => {
  const yieldwatch = 'https://www.yieldwatch.net/api/all';
  const { address } = req.params;
  const platforms = ['beefy'];

  const url = `${yieldwatch}/${address}?platforms=${platforms.join()}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => res.send(json));
});

export default router;
