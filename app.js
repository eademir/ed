//

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {


    console.log(req.url);

    if (req.url == '/') {
        fs.readFile('index.html', function (err, data) {
            res.write(data);
            res.end('.')
        });
    }
    else if (req.url == '/blog') {
        fs.readFile('blog.html', function (err, data) {
            res.write(data);
        });
    }
    else if (req.url == '/contact') {
        fs.readFile('contact.html', function (err, data) {
            res.write(data);
        });
    }
    else if (req.url == '/about-me') {
        fs.readFile('about-me.html', function (err, data) {
            res.write(data);
        });
    }
});


server.listen(5000);