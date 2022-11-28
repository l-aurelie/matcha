const express = require('express')
const router = express.Router()
const pool = require("../../database/db");

router.get("/all", async (req, res) => {
    try{
         console.log("ALL");
         const allUsers = await pool.query("SELECT * FROM users;");
         res.json(allUsers.rows);
 
    }catch(err) {
     console.error(err.message);
    }
 });

 router.get("/filter/:age/:distance", async (req, res) => {
    console.log("filter");
    const actual = await (await pool.query("SELECT * FROM users WHERE user_id = $1;", [1])).rows[0];
    console.log(actual);
    const ageMin = actual.age - Number(req.params.age);
    const ageMax = actual.age + Number(req.params.age);
    try{
        //const userFiltered = await pool.query("SELECT * FROM users WHERE age BETWEEN $1 AND $2;", [ageMin, ageMax]);
        const userFiltered = await pool.query("SELECT * FROM users WHERE ST_DistanceSphere(ST_MakePoint(latitude, longitude), ST_MakePoint($1, $2)) > 1;", [actual.latitude, actual.longitude]);
        res.json(userFiltered.rows)
    }catch(err){console.error(err);}
 });
 
 router.get("/:id", async (req, res) => {
     try{
         const {id} = req.params;
         const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
         res.json(user.rows[0]);
     }catch(err){ console.error(err.message); }
 });
 
 router.post("/", async (req, res) => {
     try{
         console.log("POST");
         console.log(req.body);
         console.log(req.body.name);
         console.log(req.body.age);
         const {name, age} = req.body;
         console.log(name);
         console.log(age);
         const newUser = await pool.query(
             "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]);
         res.json("created");
     } catch(err){ console.error(err.message); }
 });
 
 router.put("/:id", async (req, res) => {
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
 
 router.delete("/:id", async (req, res)=> {
     try{
         const {id} = req.params;
         const deleteUser = pool.query("DELETE FROM users WHERE user_id = $1 ", [id])
         res.json("deleted");
     }catch(err){
         console.error(err.message);
     }
 });

 module.exports = router