const express = require('express');
const router = express.Router();
const pool = require('../../database/db');

 //- Get user filtered by age and distance
router.get("/", async (req, res) => {
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

module.exports = router;