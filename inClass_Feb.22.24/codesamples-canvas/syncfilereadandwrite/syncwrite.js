var fs = require("fs");

// Synchronously writes a file
// writeFileSync(): will block until the data is written
// "out.txt": the output file name
// "Hello World": the data to write
fs.writeFileSync("out.txt", "Hello World");
