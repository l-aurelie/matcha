//- pool : l'objet qui permet de se connecter a la db (outil du module pg qui nest pas un orm)

//TODO var d'env, un seul objet pool? 
const Pool = require("pg").Pool;

/*const pool = new Pool({
    user: "userpg",
    host: "postgres",
    database: "db",
    password: "password",
    port: 5432,
});*/ 

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_ENV,
});

module.exports = pool;