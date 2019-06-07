exports.setRequestUrl = (app) => {
    var webController = require('./controllers/web-controller')
    var personController = require('./controllers/api-controller')
    app.get('/', webController.homepage)
    app.get('/add-person', webController.addPerson)
    app.get('/find-all', personController.findAll)
    app.post('/insert', personController.insert)
}