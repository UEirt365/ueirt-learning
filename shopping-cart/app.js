var express = require('express');

var database = require('./db/db');
var product = require('./routes/product');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index')
});
app.use('/product', product);

app.listen(8080, () => {
    console.log('Application running on http://localhost:8080');
});
