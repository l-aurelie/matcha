//- Fichier contenant toutes les routes de l'API (creation d'un module js 'route'
//- qui pourra etre importe ailleurs)

app = require('./appConfig')

exports.route = () => {
    app.use('/user', require('./user/userController'));
    app.use('/filter', require('./match/filterController'));
    app.use('/login', require('./login/loginController'));
}