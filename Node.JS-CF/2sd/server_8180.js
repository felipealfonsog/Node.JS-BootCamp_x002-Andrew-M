var http = require("http");
   fs = require("fs");


// programacion ascrincrona
http.createServer(function(req, res) {
    
var html = fs.readFile("./html.html", function(err, html){
   
    var i = 0;
        while (true) {
            i++;
        res.write(i+"");
        };
 res.end();
    });
    
    // http.createServer(function(req,res){
}).listen(8180);





