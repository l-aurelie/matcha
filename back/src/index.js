const app = require('./appConfig');
const routes = require('./routes');

routes.route();

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});