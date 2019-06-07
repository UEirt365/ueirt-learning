var express = require('express');

var configs = require('./configs')
var routes = require('./routes')
var app = express();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

routes.setRequestUrl(app);

app.listen(configs.port, function () {
    console.log("Starting!....");
});