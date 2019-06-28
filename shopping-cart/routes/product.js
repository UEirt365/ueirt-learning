var express = require('express');
var router = express.Router();

var Product = require('./../db/schemas/product');

router.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('index', {
                products: products
            });
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

module.exports = router;
