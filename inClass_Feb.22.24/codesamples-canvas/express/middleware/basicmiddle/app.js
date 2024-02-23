// Import express
var express = require('express');

// Create an instance of the app
var app = express();


// This will trigger when whenever the "/" (index.html) page is requested.
// The callback parameters are
// @param req: the request
// @param resp: the response
// @param next: the next middleware
app.use("/", function(req, resp, next){

	// Add a random property to the request before letting
	// the request to be processed by the app.get middleware
	// below.
	console.log("First middleware triggered!");
	req.myproperty = "Hello world";	

	// Execute the next middleware
	next();
	
});


// The stadard app.get middleware for index.html.
// Note: the request was previously modified by the
// middleware above
app.get("/", function(req, resp){

	resp.send("This is a response modified using middleware. The added property is: " + req.myproperty);

});


// Listen for requests
app.listen(3000);
