let mongoose = require('mongoose');
let configs = require('./../configurations/configs');

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(configs.mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("Database connection successful!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();
