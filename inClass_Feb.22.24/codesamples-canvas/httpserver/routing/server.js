// Import the http package
var http = require('http');

// Create an instance of the HTTP server. Whenever a new request arrives,
// the call back function will be invoked:
//  req: The request
//  resp: The response
var server = http.createServer(function(req, resp){

	console.log(req.url);  // Print the URL
	 // Create the status line and a header line Content-Tyle: text/plain
	resp.writeHead(200, {"Content-Type": "text/plain"}); 
	resp.write("Hello world");   // Add string "Hello World" into the response entity body
	resp.end();                  // Send the response back the client
	
});

// Listen for incoming requests on port 3000 of the local system
server.listen(3000, "127.0.0.1");
