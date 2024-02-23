var express = require("express");

// Needed to parse the request body
var bodyParser = require("body-parser");
var app     = express();

// Needed to parse the request body
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

// Handles the sending of the index
app.get("/", function(req, res){
	
	res.sendFile(__dirname + "/index.html");
});

// Handles the form
app.post("/myaction", function(req, res) {
  // Print the values of the form variables
  console.log("Got data: " + req.body.name);
  console.log("Got data: " + req.body.email);
  console.log("Got data: " + req.body.message);
  res.send("You sent: " + req.body.name + " " + req.body.email + " " + req.body.message);
});

app.listen(3000);
