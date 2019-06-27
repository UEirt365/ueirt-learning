var mongoose = require('mongoose');

const mongodb_url = 'mongodb://localhost:27017/shopping-cart';

class Database {
    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log('Database connection successfully.');
            })
            .catch(() => {
                console.log('Database connection error!');
            })
    }
}

module.exports = new Database();
