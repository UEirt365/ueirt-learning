const path = require('path');

exports.port = 8080;
exports.root_dir = path.dirname(require.main.filename);
exports.views_dir = this.root_dir + '/views';
exports.mongodb_url = 'mongodb://localhost:27017/test';
