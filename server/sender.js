var nodemailer = require('nodemailer');


var smtpTransport = nodemailer.createTransport('SMTP',{
    host: "smtp.gmail.com",
    secureConnection: true,
    port: 465,
    auth: {
        user: 'eademir001@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: '<%= email%>',
    to: 'eademir1@hotmail.com',
    subject: '<%= name%>' ,
    text: '<%= text%>',
}

smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        alert(error);
    }else{
        alert("Form gönderildi: " + response.message);
    }
});

module.exports = sender;