const Pool = require("pg").Pool;

const pool = new Pool({
  host: "todo-app.c0wzpvypzwda.ca-central-1.rds.amazonaws.com",
  user: "postgres",
  port: 5432,
  database: "todoapp",
  password: process.env.DB_PASSWORD,
});

module.exports = pool;
