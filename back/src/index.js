//- Importe l'objet app et les routes et lance le serveur sur le port 3000 

const app = require('./appConfig');
const routes = require('./routes');

routes.route();

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});