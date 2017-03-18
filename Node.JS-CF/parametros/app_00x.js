var http = require("http");
       fs = require("fs");


http.createServer(function(req, res) {
    
/*    console.log(req);*/
    
    if (req.url.indexOf("favicon.ico") > 0 ) { return; }
    
    console.log("================\n\n");
    console.log("req");
    console.log("================\n\n");
    
fs.readFile("./codehtml000x.html", function(err, html){
   
/*    var i = 0;
        while (true) {
            i++;
        res.write(i+"");
        };*/
    
    var html_string = html.toString();
    
    // patrón de expresion regular que busca en el html
    var variables = html_string.match(/[^{}]+(?=})/g)
    var nombre = "";
    
  //   var nombre = "Coco"; 
    if (req.url.indexOf("?"))
    
    
   for (var i = variables.length - 1; i >=0; i--) {
     
        
        var value = eval(variables[i]);
       
       
 
        html_string = html_string.replace("{"+variables[i]+"}", value);
                                       
    };
    
    
    
    
    // enviamos el contenido 
 res.writeHead(200, {"Content-type":"text/html" })
    
  // res.write(JSON.stringify({nombre:"0001", username:"0001"}));

    res.write(html_string);
    res.end();
    });
    
    // http.createServer(function(req,res){
}).listen(8180);


