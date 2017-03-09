var express = require('express'),
    path = require('path'),
    socketIO = require('socket.io'),
    publicPath = path.join(__dirname, '../public');

console.log(__dirname + '../public');

var app = express(), port = process.env.PORT || 3000;
app.use(express.static(publicPath));

var server = require('http').createServer(app);
var io = socketIO(server);

io.on('connection', function (socket) {
    console.log('new user is connected');

    socket.on('disconnect', function () {
        console.log('user is disconnect');
    });
});

server.listen(3000, function () {
    console.log(`Server listening on port ${port}`);
});