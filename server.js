var express = require('express');
var app = express();
var path = require('path');
var route = require('./server/routers/router');
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './server/views'));


app.use(function(req, res, next){
    
    next();
});
app.use(ejsLayouts);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/blogs', express.static(path.join(__dirname, 'blogs')));
app.use('/wait-state', express.static(path.join(__dirname, 'wait')));
app.use('/', route);



app.listen(8000);