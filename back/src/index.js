//- Importe l'objet app et les routes et lance le serveur sur le port 3000 

const app = require('./appConfig');
const routes = require('./routes');
require('dotenv').config();

routes.route();

app.use((err, req, res, next) => {//TODO 
    console.log("MIDDLEWARE ERROR :" + err.message);
        if(!err.statusCode)
            res.status(500).send('Internal server error, please try later');
});

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});