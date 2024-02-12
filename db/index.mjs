import pg from "pg";
import env from 'dotenv';

const { Pool } = pg;

env.config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  max: 20,   // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
});

const getClient = async () => pool.connect();

export { pool, getClient };
