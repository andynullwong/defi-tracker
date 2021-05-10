/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error('DB Connection error', err.stack));

module.exports = pool;
