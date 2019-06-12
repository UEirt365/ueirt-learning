var express = require('express');
var router = express.Router();

var configs = require('./../configurations/configs');

router.get('/', (req, res) => {
    res.sendFile(configs.views_dir + '/index.html');
});
router.get('/add-product', (req, res) => {
    res.sendFile(configs.views_dir + '/add-product.html');
});

module.exports = router;
