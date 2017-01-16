var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

var rooms = [];
var roomN = 0;

server.listen(port, function() {
  console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname));

/*
var app = require('express').createServer();
var io = require('socket.io').listen(app);
app.listen(8080);
app.get('/', function(req,res){
  res.sendfile(__dirname + '/index.html');
});
*/
var numUsers = 0;

io.sockets.on('connection', function(socket) {

  // convenience function to log server messages on the client
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {
    log('Client said: ', message);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('connect', function(room, user){
    var n;
    log('Connection');
    socket.username = user;
    socket.room = room;
    if(rooms[room].length === 0){
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.join(room);
      socket.emit('created', room, socket.id);
    } else if (rooms[room].length === 1){
      log('Client ID ' + socket.id + ' joined room ' + room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready', room);
      socket.broadcast.emit('ready', room);
    } else {
      socket.emit('full', room);
    }
  })
  
  /*socket.on('create or join', function(room) {
    log('Received request to create or join room ' + room);

    var numClients = io.nsps['/'].adapter.rooms[room].length;
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === undefined) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.emit('created', room, socket.id);
    } else if (numClients === 1) {
      log('Client ID ' + socket.id + ' joined room ' + room);
      // io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready', room);
      socket.broadcast.emit('ready', room);
    } else { // max two clients
      socket.emit('full', room);
    }
  });*/

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });

});