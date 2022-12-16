const nodemailer = require('nodemailer');
const crypto = require('crypto');

let transporter = nodemailer.createTransport({
    host: 'smtp.laposte.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports = {
    sendConfirmMail: function(receiver, token){

        let mailOptions = {
            from: ' "MATCHAPP" <mailer-aurelie@laposte.net> ',
            to: receiver,
            subject: 'test-mail',
            text: 'mail de confirmation',
            html: `<p>mail de confirmation ${token} </p>`
        };

        transporter.sendMail(mailOptions, (error, info)=> {
            if (error){ return console.log(error);}
            console.log('message envoye : % s', info.messageId);
            console.log('info: % s', info);
        });
    },

    createConfirmationToken: function (){
        return(crypto.randomBytes(32).toString('hex'));        
    } 
}
