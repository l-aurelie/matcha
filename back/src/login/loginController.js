const express = require('express');
const router = express.Router();
const userQuery = require("../user/userModel");
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    console.log("LOGIN");
    const {email, password} = req.body;
    const loginUser = await userQuery.findOneByMail(res, email);
    console.log(loginUser);
    if(loginUser)
    {
        bcrypt.compare(password, loginUser.password)
            .then(valid => {
                if(valid){
                    console.log("valid password");
                    res.status(200).json(
                        {userId : loginUser.user_id, token: "TOKEN"});
                }
                else{
                    //res.status(401).json({mesage: "invalid password"});//TODO erreur axios 401? 
                    res.json({mesage: "invalid password"});//TODO 200 ou 401?  
                    console.log("invalid email or password");//pour question securite message generique
                }
            })
            .catch((err) => {console.log(err); res.status(500).json({err});});
    }
    else{ res.json({message: "invalid email or password"}); } // TODO 401 ou 200 ? 
});

module.exports = router;