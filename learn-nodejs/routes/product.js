var express = require('express');
var router = express.Router();

var configs = require('./../configurations/configs');
var Product = require('./../db/models/product');

router.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            res.send(products);
        })
        .catch(err => {
            console.log('Error: ', err);
            res.sendFile(configs.views_dir + '/error.html');
        })
});

router.post('/', (req, res) => {
    let newProduct = new Product({
        name: req.body.productName,
        type: req.body.productType
    });

    newProduct.save()
        .then(doc => {
            res.send(doc)
        })
        .catch(err => {
            console.log('Error: ', err);
            res.sendFile(configs.views_dir + '/error.html');
        })
});

module.exports = router;
