app = require('./appConfig')

exports.route = () => {
    app.use('/user', require('./user/userController'));
}