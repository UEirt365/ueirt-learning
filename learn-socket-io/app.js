var express = require('express');
var app = express();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home')
});

io.on('connection', socket => {
    console.log('Connected ' + socket.id);

    socket.on('chat message', msg => {
        console.log('message: ' + msg.socket_id);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log(socket.id + ' is disconnected');
    })
});

http.listen(8080, () => {
    console.log('Application running on http://localhost:8080');
});
