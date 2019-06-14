var express = require('express');
var bodyParser = require('body-parser');

var configs = require('./configurations/configs');
var Database = require('./db/database');
var routes = require('./routes/web-controller');
var product = require('./routes/product');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);
app.use('/product', product);

app.listen(configs.port, function () {
    console.log("Starting!....");
});
