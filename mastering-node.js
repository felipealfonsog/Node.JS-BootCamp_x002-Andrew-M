
/*
sincrono, la invocacion espera el resultado, o sea invocas a un metodo y te quedas en ese punto esperando hasta tanto se devuelva un resultado (o un error)

asincrono, realzias la invocacion pero continuas con la ejecucion, la invocacion continua y por lo general se define un callback (o sea algun metodo o funcion) que recibira la respuesta o el error para toamr alguna accion

pero en este ultimo la ejecucion no se queda esperando la respuesta continua sin bloquear la ejecucion del hilo actual

*/


// --------------------------------------------------------

var net = require('net');
var sock = net.connect(8080);
process.stdin.pipe(sock);
sock.pipe(process.stdout);

var repl = require('repl')
var net = require('net')
net.createServer(function(socket) {
  repl
  .start({
    prompt : '> ',
    input : socket,
    output : socket,
    terminal : true

  })
  .on ('exit', function () {
    socket.end()

  })
}). listen(8080)
