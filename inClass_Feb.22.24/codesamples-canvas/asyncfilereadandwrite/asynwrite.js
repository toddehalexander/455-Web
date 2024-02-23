var fs = require('fs');

// Asynchronously writes file out.txt
// writeFile: writes to the specified file asynchronously
// out.txt: the name of the output file
// "Hello World": the data to write to the file
// function(data): this is the callback function
// to invoke once the data has been written
//    error: the error code if error occured
fs.writeFile("out.txt", "Hello World", function(error)
{
	console.log("Done!");
});

// Since the reading of the file happens
// asynchronously, the above reading will
// not block. Hence, the program will
// continue executing. The text below
// MAY appear before the file reading
// is complete and the call back invoked
console.log("Hello from the main thread!");
