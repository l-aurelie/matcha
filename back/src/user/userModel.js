const pool = require("../../database/db");

module.exports = {
    createUser: async function(res, newUser){
        const {name, email, hashPassword, age, latitude, longitude} = newUser;
        try{
            const newUser = await pool.query(
            "INSERT INTO users (name, email, password, age, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, email, hashPassword, age, latitude, longitude]);
            console.log(newUser.rows);
            res.json("created");
        }catch(err){ console.error(err.message); }
    },

    findOneByMail: async function(email){
        try{
            const user = await pool.query("SELECT * FROM users WHERE email = $1;", [email]);
            return(user.rows);
        }catch(err){console.err(err);}
    },
    
    getAll: async function(res){
        try{
            const allUsers = await pool.query("SELECT * FROM users;");
            res.json(allUsers.rows);
        }catch(err){ console.error(err.message); }
    },
    
    findOneById: async function(res, id){
        try{
            const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
            res.json(user.rows[0]);
        }catch(err){ console.error(err.message); }
    },

    updateUser: async function(res, user){
        const {id, name} = user;
        try{
            const updateUser = await pool.query(
                "UPDATE users SET name = $1 WHERE user_id = $2", [name, id])
            res.json("updated");
        }catch(err){ console.err(err.message); }
    },

    deleteUser: async function(res, id){
        try{
            const deleteUser = pool.query("DELETE FROM users WHERE user_id = $1 ", [id])
            res.json("deleted");
        }catch(err){ console.error(err.message); }
    },
}