var express = require("express");
var app     = express();

// Handles the sending of the index
app.get("/", function(req, res){
	
	// Generate the page	
	var pageStr = "	<!DOCTYPE html>";
	pageStr += "	<html>";
	pageStr += "	<head>";
	pageStr += "		<title>Non-persistent XSS Demo</title>";
	pageStr += "	</head>";
	pageStr += "	<body bgcolor='yellow'>";
	pageStr += "	   <h1>Toogle Search Engine</h1><br>";
	pageStr += "	    <form action='/search' method='get'>";
	pageStr += "        	    <label for='search'>Search Query:</label>";
	pageStr += "	            <input type='text' id='search' name='search' placeholder='Search for' size=60></input><br><br>";
	pageStr += "        	    <input type='submit' value='search' />";
	pageStr += "	    </form>";
	pageStr += "	</body>";
	pageStr += "</html>	";
	
	// Send the page
	res.send(pageStr);
		
});

// Handles the search query
app.get("/search", function(req, res) {
	res.send("<body bgcolor='yellow'>Please find below the results for: <b><u>" + req.query.search + "</b></u><br><br>Result 1<br> Result 2<br> Result 3</body>");		
});

app.listen(3000);
