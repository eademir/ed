//

var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/blogs', express.static(path.join(__dirname, 'blogs')));

app.get('/', function(req, res){
    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.end()
    });
});

app.get('/about-me', function(req, res){
    fs.readFile('about-me.html', function (err, data) {
        res.write(data);
        res.end()
    });
});

app.get('/blog', function(req, res){
    fs.readFile('blog.html', function (err, data) {
        res.write(data);
        res.end()
    });
});

app.get('/contact', function(req, res){
    fs.readFile('contact.html', function (err, data) {
        res.write(data);
        res.end()
    });
})


app.listen(8000);