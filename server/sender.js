var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

module.exports.send = function(req,res){
    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "serbayacar@gmail.com",
    pass: 'SB13haziran93'
  }
});

var mailOptions = {
  from: "serbayacar@gmail.com",
  to: req.body.email + "("+ req.body.name +")",
  subject: 'İletisim Formu',
  text: req.body.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}