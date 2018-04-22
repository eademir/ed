var path = require('path');

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'))
}
module.exports.blog = function (req, res) {
    res.sendFile(path.join(__dirname, '../../blog.html'))
}
module.exports.contact = function (req, res) {
    res.sendFile(path.join(__dirname, '../../contact.html'))
}
module.exports.aboutme = function (req, res) {
    res.sendFile(path.join(__dirname, '../../about-me.html'))
}

