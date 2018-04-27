var path = require('path');

module.exports.index = function (req, res) {
    res.render('index')
}
module.exports.blog = function (req, res) {
    res.render('blog')
}
module.exports.contact = function (req, res) {
    res.render('contact')
}
module.exports.aboutme = function (req, res) {
    res.render('about-me')
}
module.exports.err = function (res, req) {
    res.render('404')
}
//post
module.exports.contactPost = function (req, res){
 console.log(req.body)
 res.render('contact')
}

