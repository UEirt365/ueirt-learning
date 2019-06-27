var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'No Title'
    },
    tag: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('product', productSchema, 'product');
