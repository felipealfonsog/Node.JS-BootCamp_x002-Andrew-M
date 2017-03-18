var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}

http.createServer(onRequest).listen(8180);

console.log("Servidor Iniciado.");


// --------------------------
/*

function decir(palabra) {
  console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(decir, "iniciando server node.js");

ejecutar(decir, "caca");




*/
