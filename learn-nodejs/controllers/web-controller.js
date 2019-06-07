var configs = require('./../configs')
exports.homepage = (req, res) => {
    res.sendFile(configs.views_dir + '/index.html');
}
exports.addPerson = (req, res) => {
    res.sendFile(configs.views_dir + '/insert.html');
}