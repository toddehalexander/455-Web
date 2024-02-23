// Import express
var express = require('express');

// Create an instance of the app
var app = express();

// Set ejs as the template engine
app.set("view engine", "ejs");

// This will trigger when "/profile/:person" will
// be requested.  :person will be replaced by the 
// actual value specified in the URL. For example
// request for "/profile/frank" will result in the
// person being replaced with "frank". Furthermore,
// req.params.person property will be added to
// to the req.params property of the HTTP request 
app.get("/profile/:person", function(req, resp){
	
	// Generate am HTML file from the template
	// and send it to the client. We will be passing
	// a variable with the name of "profileof" and a
	// value equal to the value of req.params.person	
	resp.render("profile", {profileof: req.params.person});
	
});

// Listen for requests
app.listen(3000);
