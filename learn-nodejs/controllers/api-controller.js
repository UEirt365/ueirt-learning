var configs = require('./../configs')

exports.findAll = (req, res) => {
    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect(configs.mongodb_url, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            res.send('Failure!!!!!!!!!!');
        }
        var db = client.db('test');
        db.collection('person').find().toArray((err, result) => {
            if (err) {
                res.send('Failure!!!!!!!!!!');
            }
            res.send(result);
        })
    })
}


exports.insert = (req, res) => {
    console.log(req.body);
    console.log(req.params);
}