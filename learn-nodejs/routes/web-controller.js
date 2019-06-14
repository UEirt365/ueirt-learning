var express = require('express');
var router = express.Router();

var configs = require('./../configurations/configs');

router.get('/', (req, res) => {
    res.sendFile(configs.views_dir + '/index.ejs');
});
router.get('/add-product', (req, res) => {
    res.sendFile(configs.views_dir + '/add-product.ejs');
});

module.exports = router;
