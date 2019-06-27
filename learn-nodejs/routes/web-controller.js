var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/add-product', (req, res) => {
    res.render('add-product');
});
router.get('/update-product/:id', (req, res) => {
    var product = null;
    var options = {
        url: 'http://localhost:8080/product/' + req.params.id,
        headers: req.headers
    };
    request.get(options, (err, resp, body) => {
        if(err) {
            console.log(err);
            throw err
        }
        product = JSON.parse(body);
        res.render('update-product', {product: product});
    });
});

module.exports = router;
