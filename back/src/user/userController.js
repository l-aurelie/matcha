const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userQuery = require('./userModel');
const pool = require('../../database/db');
const { sendConfirmMail, createConfirmationToken } = require('../login/mailerService');

//- Get all users
router.get("/all", async (req, res) => {
    await userQuery.getAll(res);
});
 
//- Get user  by :id
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    await userQuery.findOneById(res, id);
});
 
//- Add new user
router.post("/", async (req, res) => {
    console.log("POST");
    const {name, email, password, age} = req.body;
    const confirmationToken = createConfirmationToken();
    console.log("confirmation :" + confirmationToken);
    bcrypt.hash(password, 10)
        .then(async hash => {
            await userQuery.createUser(res, {name, email, hashPassword : hash , age, latitude : '48.89666', longitude  : '2.31835'});
            sendConfirmMail(email, confirmationToken);
         })
        .catch(err => {console.error(err.message)});
});
 
//- Update user by :id
router.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    await userQuery.updateUser(res, {id, name});      
});

//- Delete user by :id
router.delete("/:id", async (req, res)=> {
    const {id} = req.params;
    await userQuery.deleteUser(res, id);
});

module.exports = router;