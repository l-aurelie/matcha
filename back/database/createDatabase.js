const Pool = require("pg").Pool;

async function createDb()
{
    
    const pool = new Pool({
        user: "userpg",
        host: "postgres",
        database: "db",
        password: "password",
        port: 5432,
    });
    
    await pool.query(
        "CREATE TABLE IF NOT EXISTS users("+
        "user_id SERIAL PRIMARY KEY,"+
        "name VARCHAR(255),"+
        "age INTEGER,"+
        "latitude FLOAT,"+
        "longitude FLOAT);"
    );
    
    seeder = await pool.query("SELECT name FROM users WHERE name = $1", ["seeder"]);
    if(!seeder.rows[0]){
        console.log("Seed database");
        await pool.query( 
            "INSERT INTO users (name, age, latitude, longitude)" +
            "VALUES"+
            "('aurelie', 31, 48.896683, 2.318388 )," + //96 boulevard bessieres
            "('francoise', 63, 48.896683, 2.318388)," +
            "('loan', 17, 48.896683, 2.318388)," +
            "('etienne', 55, 48.896683, 2.318388)," +
            "('marc', 43, 48.897311, 2.320878)," + //68 boulevard bessieres
            "('marine', 35, 48.897311, 2.320878)," +
            "('louis', 32, 48.896218 , 2.337188)," + //13 passage du champs marie 75018
            "('joey', 65, 48.896218 , 2.337188)," +
            "('geoffrey', 45, 62.0000000, 12.0000000)," +
            "('jislain', 15, 62.0000000, 12.0000000)," +
            "('adrien', 21, 62.0000000, 12.0000000)," +
            "('lucie', 16, 62.0000000, 12.0000000)," +
            "('lucette', 19, 62.0000000, 12.0000000)," +
            "('bertrand', 18, 62.0000000, 12.0000000)," +
            "('ginette', 21, 62.0000000, 12.0000000)," +
            "('paul', 17, 62.0000000, 12.0000000)," +
            "('mireille', 19, 62.0000000, 12.0000000)," +
            "('anna', 22, 62.0000000, 12.0000000)," +
            "('tom', 24, 62.0000000, 12.0000000)," +
            "('timothe', 23, 62.0000000, 12.0000000)," +
            "('luci', 33, 62.0000000, 12.0000000)," +
            "('lina', 32, 62.0000000, 12.0000000)," +
            "('pascal', 31, 62.0000000, 12.0000000)," +
            "('prudence', 36, 62.0000000, 12.0000000)," +
            "('martin', 34, 62.0000000, 12.0000000)," +
            "('flora', 32, 62.0000000, 12.0000000)," +
            "('seeder', 37, 62.0000000, 12.0000000);"
        );
    }
    else { console.log("Database allready created"); }
}

createDb();