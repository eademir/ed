const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

module.exports.send = function(req, res){

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '###',
        pass: '###'
    }
});

const mailOptions = {
    from: '###',
    to: '###',
    subject: req.body.name + "<"+req.body.email+ ">",
    text: req.body.message,
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.message, info.response);
        res.render('index');
    });
}
