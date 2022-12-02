//- Fichier d'automatisation de la DB, (lance dans les scripts express du package.json)
//- cree les tables si n'existent pas
//- seed la db si pas seed

const Pool = require("pg").Pool;

async function createDb()
{
    //- pool : l'objet qui permet de se connecter a la db (outil du module pg qui nest pas un orm)
    const pool = new Pool({
        user: "userpg",
        host: "postgres",
        database: "db",
        password: "password",
        port: 5432,
    });
    
    //- On cree les tables
    await pool.query(
        "CREATE TABLE IF NOT EXISTS users("+ //TODO add NOT NULL 
        "user_id SERIAL PRIMARY KEY,"+
        "name VARCHAR(255),"+
        "password VARCHAR(255),"+
        "age INTEGER,"+
        "email VARCHAR(50) UNIQUE,"+ // TODO 50?
        "latitude FLOAT,"+
        "longitude FLOAT);"
    );

    //- Seed la db 
    seeder = await pool.query("SELECT name FROM users WHERE name = $1", ["seeder"]);
    if(!seeder.rows[0]){
        console.log("Seed database");
        await pool.query( 
            "INSERT INTO users (name, age, latitude, longitude)" +
            "VALUES"+
            "('ecole42 (0)', 31, 48.89666, 2.31835)," + //96 boulevard bessieres
            "('42 (0)', 63, 48.89666, 2.31835)," + 
            "('96 bessieres(0)', 17, 48.89666, 2.31835)," +
            "('porte de clichy (0.384)', 55, 48.89470, 2.31414)," + //Porte de clichy (384m)
            "('metro pt de clichy (0.384)', 43, 48.89470, 2.31414)," +
            "('ligne 14 pt de clichy (0.384)', 35, 48.89470, 2.31414)," +
            "('cathedrale notre dame (5,32)', 32, 48.92437 , 2.25893)," + //gare de colombes (5,33km)
            "('notre dame de paris (5.32)', 65, 48.92437 , 2.25893)," +
            "('notre dame (5.32)', 45, 48.92437, 2.25893)," +
            "('jislain (11.76)', 15, 48.84209, 2.43643)," + // Chateau de vincennes (10.55)
            "('adrien(11.76)', 21, 48.84209, 2.43643)," +
            "('lucie (11.76)', 16, 48.84209, 2.43643)," +
            "('lucette (15.9)', 19, 48.96285, 2.51231)," + //villepinte rer (15.96)
            "('bertrand (15.9)', 18, 48.96285, 2.51231)," +
            "('ginette (15.9)', 21, 48.96285, 2.51231)," +
            "('paul (21.69)', 17, 48.95328, 2.60266)," + //villeparisis rer (21.69)
            "('mireille (21.69)', 19, 48.95328, 2.60266)," +
            "('anna (21.69)', 22, 48.95328, 2.60266)," +
            "('tom (33.37)', 24, 48.97097, 2.76105)," + // mairie de charny (33.37)
            "('timothe (33.37)', 23, 48.97097, 2.76105)," +
            "('luci (33.37)', 33, 48.97097, 2.76105)," +
            "('lina (41.54)', 32, 48.96008, 2.87886)," + // cathedrale de meaux (41.54)
            "('pascal (41.54)', 31, 48.96008, 2.87886)," +
            "('prudence (41.54)', 36, 48.96008, 2.87886)," +
            "('martin (52.10)', 34, 48.95947, 3.02529)," + // gare de changis sur marne (52.10)
            "('flora (52.10)', 32, 48.95947, 3.02529)," +
            "('seeder (52.10)', 37, 48.95947, 3.02529);"
        );
    }
    else { console.log("Database allready created"); }
}

//- On utilise une fonction car doit etre async (attendre creation pour seed)
createDb();