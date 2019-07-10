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

router.get("/search", function (req, res) {
    let keyword = req.query.keyword;
    Product.find({
        $or: [
            {'title': new RegExp(keyword, 'i')},
            {'tag': new RegExp(keyword, 'i')}
        ]
    }, function (err, doc) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.render('index', {
            products: doc
        });
    })
});

module.exports = router;
