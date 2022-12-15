const jwt = require('jsonwebtoken');
const userQuery = require('../user/userModel');

//- Middleware verifiant que l'utilisateur a un acces_token pour les routes protegees (WIP)
module.exports =  async(req, res, next) => {
    try{
        console.log('auth middleware')
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);//TODO cle secrete
        console.log('decodedToken'); console.log(decodedToken);
        const  userId = decodedToken.userId;
        req.auth = { userId: userId };
        req.user = await userQuery.findOneById(userId);
    next();
    }catch(err){ console.log('auth catch: acces denied'); res.status(401).json({message :'acces denied'});}
}