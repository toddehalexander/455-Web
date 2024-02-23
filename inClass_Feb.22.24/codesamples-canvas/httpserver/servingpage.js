// Import the http package
var http = require("http");

// Import the file system package
var fs = require("fs");

// Create an instance of the HTTP server. Whenever a new request arrives,
// the call back function will be invoked:
//  req: The request
//  resp: The response
var server = http.createServer(function(req, resp){

	console.log(req.url);  // Print the URL
	// NOTE: we must change the content type to text/html.
	// If we keep it as text/plain 
	resp.writeHead(200, {"Content-Type": "text/html"}); 
	
	// Asynchrnously read the file
	fs.readFile("index.html", "utf8", function(error, data){
	
	resp.write(data);            // Add string "Hello World" into the response entity body
	resp.end();                  // Send the response back the client

	});
});

// Listen for incoming requests on port 3000 of the local system
server.listen(3000, "127.0.0.1");
