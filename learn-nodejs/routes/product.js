var express = require('express');
var router = express.Router();

var Product = require('./../db/models/product');

router.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('products', {products: products})
        })
        .catch(err => {
            console.log('Error: ', err);
            res.render('error');
        })
});

router.post('/', (req, res) => {
    let newProduct = new Product({
        name: req.body.productName,
        type: req.body.productType
    });

    newProduct.save()
        .then(doc => {
            res.redirect('/product')
        })
        .catch(err => {
            console.log('Error: ', err);
            res.render('error');
        })
});

router.delete('/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
});
router.get('/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.send(product)
    })
});
router.post('/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(
        {_id: productId},
        {$set: {name: req.body.productName, type: req.body.productType}},
        {useFindAndModify: false})
        .then(doc => {
            res.redirect('/product')
        })
});
module.exports = router;
