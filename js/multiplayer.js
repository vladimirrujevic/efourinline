var mode, socket, isInitiator, room, igName
mode = 0
socket = io.connect()

$('input[type=radio][name=mode]').change(function () {
  // window.alert('Value changed, current value: ' + this.value)
  switch (this.value) {
    case 'local':
      mode = 0
      $('#viL').show()
      $('#viR').hide()
      break
    case 'remote':
      mode = 1
      $('#viL').hide()
      $('#viR').show()
      break
  }
})

var startR = () => {
  //window.alert('Remote game')
  room = $('#roomName').val()
  igName = $('#playerName').val()
  if (room === '') {
    window.alert('Vnesite ime sobe!')
  }
  if (igName === '') {
    window.alert('Vnesite vaše ime!')
  }
  if (room !== '' && igName !== '') {
    socket.emit('connect', room, igName)
  }
}

/*
window.room = prompt("Enter room name:");

if (room !== "") {
  console.log('Message from client: Asking to join room ' + room);
  socket.emit('create or join', room);
}
*/

socket.on('created', function (room, clientId) {
  isInitiator = true
})

socket.on('full', function (room) {
  console.log('Message from client: Room ' + room + ' is full :^(')
})

socket.on('ipaddr', function (ipaddr) {
  console.log('Message from client: Server IP address is ' + ipaddr)
})

socket.on('joined', function (room, clientId) {
  isInitiator = false
})

socket.on('log', function (array) {
  console.log.apply(console, array)
})
