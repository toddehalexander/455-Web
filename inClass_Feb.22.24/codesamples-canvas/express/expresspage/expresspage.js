// Import the express framework
var express = require('express');

// Create an instance of the express app
app = express();

app.use(express.static(__dirname + '/public'));

// On GET request requesting "/" the website homepage 
// the following callback will be invoked
// req: the request
// resp: the response
// NOTE: express and response objects are extended from
// with additional methods (compared to the http package)
app.get('/', function(req, resp){
        // Send back HTTP response containing "Hello World“
        //__dirname refers to the current directory path
        resp.sendFile(__dirname + "/index.html");
});


// Start listening
app.listen(3000);

