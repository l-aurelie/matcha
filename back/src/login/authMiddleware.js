const jwt = require('jsonwebtoken');

//- Middleware verifiant que l'utilisateur a un acces_token pour les routes protegees (WIP)
module.exports = (req, res, next) => {
    try{
        console.log('middleware')
        console.log(req.headers);
        
    }catch(err){ res.status(401).json({err}); }
}