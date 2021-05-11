import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then(() => console.log('DB Connected'))
  .catch((err: Error) => console.error('DB Connection error', err.stack));

export default pool;
