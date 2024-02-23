
// Import express
var express = require('express');

// Create an instance of the app
var app = express();


// This will trigger when whenever the "/" (index.html) page is requested.
// The callback parameters are
// @param req: the request
// @param resp: the response
// @param next: the next middleware
app.use("/images/:img", function(req, resp, next){

	// Send back the name of the image file specified in req.params.img
	resp.sendFile(__dirname + "/images/" + req.params.img);
	
});


// The stadard app.get middleware for index.html.
app.get("/", function(req, resp){

	resp.sendFile(__dirname + "/index.html");

});


// Listen for requests
app.listen(3000);
