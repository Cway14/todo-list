const dotenv = require("dotenv");
dotenv.config();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.DB_ENDPOINT,
  user: process.env.DB_USER,
  port: 5432,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;
