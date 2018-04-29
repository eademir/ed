var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

module.exports.send = function(req, res){

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '###',
        pass: '###'
    }
});

var mailOptions = {
    from: '###',
    to: '###',
    subject: req.body.name + "<"+req.body.email+ ">",
    text: req.body.text,
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Form gönderildi: " + info.response);
    }
});
}
