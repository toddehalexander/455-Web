// Import the http package
var http = require("http");

// Import the file system package
var fs = require("fs");

// Create an instance of the HTTP server. Whenever a new request arrives,
// the call back function will be invoked:
//  req: The request
//  resp: The response
var server = http.createServer(function(req, resp){
	
	// The name of the file to serve
	var fileName = null;
	
	// The content type
	var contentType = null;
	
	console.log("Requested: ", req.url);  // Print the URL
	
	// The request is index.html
	if(req.url == "/")
	{
		fileName = "index.html";
		content = {"Content-Type": "text/html"}; 
	}
	// The request is about.html
	else if(req.url == "/about.html")
	{
		fileName = "about.html";
		content = {"Content-Type": "text/html"}; 
	}
	// The request is kitty.jpeg
	else if(req.url == "/kitty.jpeg")
	{
		fileName = "kitty.jpeg";
		content = {"Content-Type": "image/jpeg"}; 
	}
	
	
	// NOTE: we must change the content type to text/html.
	// If we keep it as text/plain 
	resp.writeHead(200, content); 
	
	// Asynchrnously read the file
	fs.readFile(fileName,  function(error, data){
	
	resp.write(data);            // Add string "Hello World" into the response entity body
	
	
	resp.end();                  // Send the response back the client

	});
});

// Listen for incoming requests on port 3000 of the local system
server.listen(3000, "127.0.0.1");
