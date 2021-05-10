/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const path = require('path');

const userRouter = require('./routes/user.route');
const walletRouter = require('./routes/wallet.route');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use('/api/user', userRouter);
app.use('/api/wallet', walletRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
