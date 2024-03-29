// Import the stuff for the express framework
var express = require('express');
var fs = require('fs');
var app = express();

// Needed to parse the request body
var bodyParser = require("body-parser");
var app     = express();

// Needed to parse the request body
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

// Parses a database of usernames and passwords
// @param dbFile - the database file
// @return - the list of user name and passwords
function parseDB(dbFile)
{
	// Read the file
	fs.readFile(dbFile, "utf8", function(error, data){
		
		console.log(data);
		data.split(";");
		
	});
}

// The handler for the home page
// @param req - the request
// @param res - the response
app.get("/", function(req, res){
	
	// Read the file
	fs.readFile("db.txt", "utf8", function(error, data){
		
		console.log(data);
		
		// Split the data
		var tokenizedData = data.split("\n");
		console.log(tokenizedData);
		var page = "<html>"
		page +="<title> Welcome your private journal </title>"
		page += "<body bgcolor='yellow'>"
		page += "<h1> Welcome to your mostly private journal. Jot down your most private thoughts and save them."
		page += "They will be kept absolutely mostly private."
		page += "</h1>"
		page += "<h2> If you have an account, please login here: </h1>"
		page += "<form action='http://localhost:3000/login' method='POST'>"
		page += "<label for='username'>Username:</label>"
		page +="<input type='text' id='username' name='username'>"
		page += "<label for='pass'>Password (8 characters minimum):</label>"
		page += "<input type='password' id='password' name='password'; minlength='8' required>"
		page +="	<input type='submit' value='Sign in'>"
		page += "</form>"
		page += "<h2> No account? Create one here! </h1>"
		page += "<form action='http://localhost:3000/create' method='POST'>"
		page +="<label for='username'>Username:</label>"
		page += "<input type='text' id='username' name='username'>"
		page += "<label for='pass'>Password (8 characters minimum):</label>"
		page += "<input type='password' id='pass' name='password' minlength='8' required>"
		page += "<input type='submit' value='Create'></form> </div><hr>"
		page += "<h1> Find your friends! The following people also use this awesome website </h1>"
		
		for(let i = 0; i < tokenizedData.length; i++)
		{
			page += "<br>" + tokenizedData[i].split(";")[0];
			console.log(tokenizedData[i]);
		}
		
		page += "</body></html>"
			
		res.send(page);
		
	});
});


// The handler for the request of the login page
// @param req - the request
// @param res - the response 
app.post("/login", function(req, res){
	
	console.log("Here!");
		
	// Read the file
	fs.readFile("db.txt", "utf8", function(error, data){
		
		// The page HTML
		var pageHtml = "<HTML><BODY bgcolor='yellow'><h1> Go ahead! Record your thoughts!</h1><br>";
		pageHtml += "<textarea rows='10' cols='50'>Share your thoughts</textarea></input><hr>";
		pageHtml += "<h1> Find your friends! Below are other users who use this platform</h1>";

		console.log(data);
		
		// Split the data
		var tokenizedData = data.split("\n");
		console.log(tokenizedData);
		
		// Match the credentials 
		var credMath = false;
		
		// Add the HTML; match the password while you are at it
		for(let i = 0; i < tokenizedData.length; i++)
		{ 
			// Get the user name and password 
			let userName = tokenizedData[i].split(";")[0];
			let password = tokenizedData[i].split(";")[1];
				
			// Check the user name and password 
			if(req.body.username == userName && req.body.password == password)
			{
				// We have a match!
				credMath = true;
			}
			
			// Add the user name
			pageHtml += (userName + "<br>");
		
			console.log(tokenizedData[i]);
		}
		
		pageHtml += "</body></html>"
		
		// Credentials did not match? Do not display the page	
		if(credMath ==  false)
		{
			pageHtml = "<html><body bgcolor='yellow'><h1> Wrong password!</h1></body></html>";
		}			
		
		res.send(pageHtml);
		
	});

	
		


});

// The end-point for creating an account
app.post("/create", function(req, res){


	console.log(req.body);
	
	// Append the entry to the text database	
	fs.appendFile("db.txt", req.body.username + ";" + req.body.password + "\n", function(err){
			
		res.send("Thank you for registering!");
	});

	parseDB("db.txt");
});



app.listen(3000);
