
// programacion asincrona con node.js // 
// primeros ejercicios 



var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){
  
fs.readFile("./GoJS-master/samples/stateChart.html", function(err, html) {
    
    
       res.write(html);
        res.end();
    
/*
    
    
var i = 0 ;
    while (true) {
        i++;
    }
        res.write(i+"");
};

*/

                      
                      
   });
}).listen(10104);
    
    







    

///


 