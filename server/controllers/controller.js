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

