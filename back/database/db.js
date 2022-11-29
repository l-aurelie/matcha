//- pool : l'objet qui permet de se connecter a la db (outil du module pg qui nest pas un orm)

//TODO var d'env, un seul objet pool? 
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "userpg",
    host: "postgres",
    database: "db",
    password: "password",
    port: 5432,
}); 

module.exports = pool;