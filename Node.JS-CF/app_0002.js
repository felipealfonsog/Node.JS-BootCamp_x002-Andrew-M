var http = require("http");
       fs = require("fs");


http.createServer(function(req, res) {
    
fs.readFile("./codehtml0002.html", function(err, html){
   
/*    var i = 0;
        while (true) {
            i++;
        res.write(i+"");
        };*/
    
    var html_string = html.toString();
    
    // patrón de expresion regular
    var variables = html_string.match(/[^{}]+(?=})/g)
    
    
    var nombre = "Coco"; 
    
    
    
   for (var i = variables.length - 1; i >=0; i--) {
        
        
        var value = eval(variables[i]);
        html_string = html_string.replace("{"+variables[i]+"}", value);
                                       
    };
    
    
    
    
    
 res.writeHead(200, {"Content-type":"text/html" })
    
  // res.write(JSON.stringify({nombre:"0001", username:"0001"}));

    res.write(html_string);
    res.end();
    });
    
    // http.createServer(function(req,res){
}).listen(8180);


