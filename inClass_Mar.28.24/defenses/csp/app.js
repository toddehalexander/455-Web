// Import express and csp header packages
var express = require('express');
const csp = require('helmet-csp');

// Create an instance of the app
app = express();

app.use(csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'", 'default.com'],
    scriptSrc: ["'self'", 'emerald.ecs.fullerton.edu'],
    //styleSrc: ['style.com'],
    //fontSrc: ["'self'", 'fonts.com'],
    imgSrc: ['img.com', 'data:'],
    //sandbox: ['allow-forms', 'allow-scripts'],
    //reportUri: '/report-violation',
    //objectSrc: ["'none'"],
    //upgradeInsecureRequests: true,
    //workerSrc: false  // This is not set.
  }}))

// Requests an index page
// @param req - the requirnment
// @res - the response
app.get("/", function(req, res){

	console.log("Requsted...");
	res.sendFile(__dirname + "/test.html")
});

app.listen(3000);
