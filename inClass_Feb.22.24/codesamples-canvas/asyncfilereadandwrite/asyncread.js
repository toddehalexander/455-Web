var fs = require('fs');

// Asynchronously reads file in.txt
// readFile: reads the specified file asynchronously
// utf8: the input file consists of utf8 characters
// function(error, data): this is the callback function 
// to invoke once the data has been read
//    error: the error code if error occured
//    data: the data read
fs.readFile("in.txt", "utf8", function(error, data)
{
	// Print the read data
	console.log("Read: ", data);
});

// Since the reading of the file happens
// asynchronously, the above reading will
// not block. Hence, the program will
// continue executing. The text below
// MAY appear before the file reading
// is complete and the call back invoked
console.log("Hello from the main thread!");
