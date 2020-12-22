const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'camway',
    password: 'Milawoody14.',
    host: 'localhost',
    port: 5432,
    database: 'todoapp'
})

module.exports = pool;