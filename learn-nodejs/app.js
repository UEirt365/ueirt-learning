var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

var configs = require('./configurations/configs');
var Database = require('./db/database');
var routes = require('./routes/web-controller');
var product = require('./routes/product');
var authen = require('./db/authenticate/authenticate');
var login = require('./routes/login');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Authenticate
app.use('/login', login);
app.use('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.render('login')
    }
});

// Website routes
app.use('/', routes);
app.use('/product', product);

app.listen(configs.port, function () {
    console.log("Starting!....");
});
