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
        "age INTEGER);"
    );
    
    seeder = await pool.query("SELECT name FROM users WHERE name = $1", ["seeder"]);
    if(!seeder.rows[0]){
        console.log("Seed database");
        await pool.query( 
            "INSERT INTO users (name, age)" +
            "VALUES"+
            "('aurelie', 31)," +
            "('francoise', 63)," +
            "('loan', 17)," +
            "('etienne', 55)," +
            "('marc', 43)," +
            "('marine', 35)," +
            "('louis', 32)," +
            "('joey', 65)," +
            "('geoffrey', 45)," +
            "('jislain', 15)," +
            "('adrien', 21)," +
            "('lucie', 16)," +
            "('lucette', 19)," +
            "('bertrand', 18)," +
            "('ginette', 21)," +
            "('paul', 17)," +
            "('mireille', 19)," +
            "('anna', 22)," +
            "('tom', 24)," +
            "('timothe', 23)," +
            "('luci', 33)," +
            "('lina', 32)," +
            "('pascal', 31)," +
            "('prudence', 36)," +
            "('martin', 34)," +
            "('flora', 32)," +
            "('seeder', 37);"
        );
    }
    else { console.log("Database allready created"); }
}

createDb();