
var http = require("http");


    var server = http.createServer(function (request, response) {
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("Processing....");
                response.end();
        
   
        
        
        
                
    /*            serer.once("listening", function() {
                    console.log("Server runnning at Merkava port: 8124")
                });*/
        
    }).listen(10104);


