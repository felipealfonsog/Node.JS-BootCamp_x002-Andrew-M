var http = require("http");
   fs = require("fs");


// programacion ascrincrona
http.createServer(function(req, res) {
    
var html = fs.readFile("./html.html", function(err, html){
   
/*    var i = 0;
        while (true) {
            i++;
        res.write(i+"");
        };*/
    
    
    res.writeHead(200, {"Content-type":"application/html" });
    
    res.write(JSON.stringify({nombre:"0001", username:"0001"}));
    res.end();
    });
    
    // http.createServer(function(req,res){
}).listen(8180);




