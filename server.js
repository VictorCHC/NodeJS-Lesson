// in the node.js command prompt, type in "node server.js" to get this running

var http = require("http");

// Parse through a function 
var server = http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Worldy Boo");
    response.end();
});

// Give it a port to listen in on (8888)
server.listen(8888);

//Remember, this language does call backs
//pay load is what gets manipulated

// Try using nodemon
// Install using npm nodemon

/*


var http = require("http");


var server = http.createServer(function(request,response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

*/