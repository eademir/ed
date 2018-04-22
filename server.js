var express = require('express');
var app = express();
var path = require('path');
var route = require('./server/routers/router');


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/blogs', express.static(path.join(__dirname, 'blogs')));
app.use('/', route);

app.listen(8000);