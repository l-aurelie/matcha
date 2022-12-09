const express = require('express');
const router = express.Router();
const pool = require('../../database/db');
const auth = require('../login/authMiddleware');

 //- Get user filtered by age and distance
router.get("/", auth, async (req, res) => {
    console.log("filter controller");
    const user = req.user;
    console.log('actual user : '); console.log(user);
    const ageMin = user.age - Number(req.query.age);
    const ageMax = user.age + Number(req.query.age);
    const distance = req.query.distance * 1000
    console.log("distance :" + req.query.distance + " age min : " + ageMin + " age Max: " + ageMax);
    try{
        //const userFiltered = await pool.query("SELECT * FROM users WHERE age BETWEEN $1 AND $2;", [ageMin, ageMax]);
        //const dist = await pool.query("SELECT ST_DistanceSphere(ST_MakePoint(longitude,latitude), ST_MakePoint($1, $2)) FROM users;", [actual.longitude, actual.latitude]);
        //console.log("distance = ");
        //console.log(dist.rows);
        const userFiltered = await pool.query(
            "SELECT *, ST_DistanceSphere(ST_MakePoint(longitude, latitude), ST_MakePoint($1, $2)) AS distance FROM users WHERE age BETWEEN $3 AND $4 AND ST_DistanceSphere(ST_MakePoint(longitude, latitude), ST_MakePoint($1, $2)) < $5;",
            [user.longitude, user.latitude, ageMin, ageMax, distance]);
        res.json(userFiltered.rows)
    }catch(err){console.error(err); console.log('error in filter'); next(err);}
});

module.exports = router;