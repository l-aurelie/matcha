const express = require('express');
const router = express.Router();
const userQuery = require("../user/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//- Verification des donnes de login de l'utilisateur, email valide 
//- + mot de passe correspondant au mot de passe crypte de la db
//- Si valide : renvoie un acces_token a l'utilisateur
router.post("/", async (req, res) => {
    console.log("LOGIN");
    const {email, password} = req.body;
    const loginUser = await userQuery.findOneByMail(res, email);
    console.log(loginUser);
    if(loginUser)
    {
        bcrypt.compare(password, loginUser.password)
            .then((valid) => {
                if(valid){
                    console.log("valid password");
                    res.status(200).json(
                        {userId : loginUser.user_id, 
                        token: jwt.sign({userId: loginUser.user_id}, process.env.SECRET_KEY, {expiresIn: '120s'})});//TODO : CLE SECRETE
                }
                else{
                    console.log("invalid password");
                    res.status(401).json({message: "invalid email or password"});//pour question securite message generique
                }
            })
            .catch((err) => {console.log(err); res.status(500).json({err});});
    }
    else{ res.status(401).json({message: "invalid email or password"}); }
});

module.exports = router;