var http = require("http");

function onRequest(request,respons){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Worldy");
    response.end();
};

var server = http.createServer(onRequest);

// Give it a port to listen in on (8888)
Week2.listen(8888);

//Remember, this language does call backs
//pay load is what gets manipulated

// Try using nodemon
// Install using npm nodemon

