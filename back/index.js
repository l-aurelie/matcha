const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json())

app.get("/user/all", async (req, res) => {
   try{
        const allUsers = await pool.query("SELECT * FROM users;");
        res.json(allUsers.rows);

   }catch(err) {
    console.error(err.message);
   }
});

app.get("/user/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        res.json(user.rows[0]);
    }catch(err){
        console.error(err.message);
    }

});



app.post("/user", async (req, res) => {
    try{
        const {name} = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (name) VALUES ($1) RETURNING *", [name]);
        res.json("created");
    } catch(err){
        console.error(err.message);
    }
});

app.put("/user/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {name} = req.body;        
        const updateUser = await pool.query(
            "UPDATE users SET name = $1 WHERE user_id = $2", [name, id])
        res.json("updated");
    }catch(err){

        console.err(err.message);
    }
});

app.delete("/user/:id", async (req, res)=> {
    try{
        const {id} = req.params;
        const deleteUser = pool.query("DELETE FROM users WHERE user_id = $1 ", [id])
        res.json("deleted");
    }catch(err){
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});