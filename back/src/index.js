//- Importe l'objet app et les routes et lance le serveur sur le port 3000 

const app = require('./appConfig');
const routes = require('./routes');
require('dotenv').config();

const nodemailer = require('nodemailer');

routes.route();

app.use((err, req, res, next) => {//TODO 
    console.log("MIDDLEWARE ERROR :" + err.message);
        if(!err.statusCode)
            res.status(500).send('Internal server error, please try later');
});

let transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    }
});

let mailOptions = {
    from: ' "MATCHAPP" <> ',
    to: 'aurelieleconte.al@gmail.com',
    subject: 'test-mail',
    text: 'ceci est un test de mail',
    html: '<p>Contenu en format html</p>'
};

transporter.sendMail(mailOptions, (error, info)=> {
    if (error){ return console.log(error);}
    console.log('message envoye : % s', info.messageId);
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});