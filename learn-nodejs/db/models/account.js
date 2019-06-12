const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    username: {
        type: String,
        default: 'username'
    },
    password: {
        type: String,
        default: '1'
    },
    is_active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Account', accountSchema, 'account');
