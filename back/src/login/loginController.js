const express = require('express');
const router = express.Router();
const userQuery = require("../user/userModel");

router.get("/:email", async (req, res) => {
    const {email} = req.params
    const loginUser = await userQuery.findOneByMail(email);
    console.log(loginUser);
    res.json(loginUser);

});

module.exports = router;