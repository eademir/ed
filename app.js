//

var http = require('http');
var fs = require('fs');

var server = http.creatserver( function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.write(data);
        res.end();
    });
});

server.listen(8080);