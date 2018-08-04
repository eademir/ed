const express = require('express');
const app = express();
const path = require('path');
const route = require('./server/routers/router');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// Add this line below
app.use(bodyParser.urlencoded({ extended: false })) 

// EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './server/views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(ejsLayouts);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/blogs', express.static(path.join(__dirname, 'blogs')));
app.use('/wait-state', express.static(path.join(__dirname, 'wait')));
app.use('/', route);
app.use(function(req, res, next){
    res.status(404);
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  });


app.listen(8000);