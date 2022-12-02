const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require("../../database/db");

//- Get all users
router.get("/all", async (req, res) => {
    try{
         console.log("ALL");
         const allUsers = await pool.query("SELECT * FROM users;");
         res.json(allUsers.rows);
 
    }catch(err) {
     console.error(err.message);
    }
 });

 //- Get user filtered by age and distance
 router.get("/filter", async (req, res) => {
    console.log("filter");
    const actual = await (await pool.query("SELECT * FROM users WHERE user_id = $1;", [1])).rows[0];
    console.log(actual);
    const ageMin = actual.age - Number(req.query.age);
    const ageMax = actual.age + Number(req.query.age);
    const distance = req.query.distance * 1000
    try{
        //const userFiltered = await pool.query("SELECT * FROM users WHERE age BETWEEN $1 AND $2;", [ageMin, ageMax]);
        
        //const dist = await pool.query("SELECT ST_DistanceSphere(ST_MakePoint(longitude,latitude), ST_MakePoint($1, $2)) FROM users;", [actual.longitude, actual.latitude]);
        //console.log("distance = ");
        //console.log(dist.rows);
        
        const userFiltered = await pool.query("SELECT * FROM users WHERE ST_DistanceSphere(ST_MakePoint(longitude, latitude), ST_MakePoint($1, $2)) < $3;", [actual.longitude, actual.latitude, distance]);
        res.json(userFiltered.rows)
    }catch(err){console.error(err);}
 });
 
 //- Get user  by :id
 router.get("/:id", async (req, res) => {
     try{
         const {id} = req.params;
         const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
         res.json(user.rows[0]);
     }catch(err){ console.error(err.message); }
 });
 
 //- Add new user
 router.post("/", async (req, res) => {
   
    console.log("POST");
    console.log(req.body);
    const {name, email, password, age} = req.body;
    const latitude ='48.89666';
    const longitude = '2.31835';
    bcrypt.hash(password, 10)
        .then(async hash => {
            try{
                const newUser = await pool.query(
                    "INSERT INTO users (name, email, password, age, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, email, hash, age, latitude, longitude]);
                res.json("created");
            }catch(err){ console.error(err.message); }
         })
        .catch(err => {console.error(err.message)});

 });
 
 //- Update user by :id
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

 //- Delete user by :id
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