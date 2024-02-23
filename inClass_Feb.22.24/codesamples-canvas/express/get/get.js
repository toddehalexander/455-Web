// Import the express package
var express = require('express');

// Create an instance of the express app
var app = express();


// To serve the main page
// @param "/index.html": the form handling script
//     function(request, response) callback:
//	@param req: the HTTP request
//      @param resp: the response we are sending
app.get("/", function(req, resp){
		
	// Extract the cat name, breed, and sex
	resp.sendFile(__dirname + "/index.html");	
	
});

// To process a form
// @param /catstory: the form handling script
//     function(request, response) callback:
//	@param req: the HTTP request
//      @param resp: the response we are sending
app.get("/catstory", function(req, resp){
		
	// Extract the cat name, breed, and sex
	var catName = req.query.catname;
	var catBreed = req.query.catbreed;
	var catSex = req.query.catsex;
	
	var respString = "Once upon a time there was a <b>" + catSex + "</b>" 
	respString += "<b> " + catBreed + "</b> cat named <b>" + catName + ".</b><br><br>";
	respString += "One day the cat decided to learn web security to save the world ";
	respString += "from the Advanced Persistent Threats and the manace of cryptominers. ";
	respString += "To do that <b> " + catName + " </b>" + "had setup a tunapot website that used Node.js express ";
	respString += "framework to display cat pictures. ";
	respString += "The attackers could not not handle the cuteness and the world was safe!<br>";
	respString += "<br>--The end!"; 
	
	// Send the response
	resp.send(respString);	
	
});

// Listen for requests
app.listen(3000);
