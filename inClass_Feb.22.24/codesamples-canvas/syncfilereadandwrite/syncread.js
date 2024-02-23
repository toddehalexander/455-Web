// Import the file system package
// Requre: used for importing packages into your code
// 'fs' argument: tell Node.js to import package used for file I/O operations
// var fs the instance of the fs object which you will use for file operations
var fs = require('fs');

// Synchronously read the file
//fileReadSync(): will block until the entire file is read
// "myFile.txt": the file to read
// "utf8": tells that the file consists of utf8 encoded characters
// contents: returns the file contents
var contents = fs.readFileSync("in.txt", "utf8");

// Print the data
console.log(contents);
