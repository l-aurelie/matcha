//TODO

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "userpg",
    host: "postgres",
    database: "db",
    password: "password",
    port: 5432,
}); 

module.exports = pool;