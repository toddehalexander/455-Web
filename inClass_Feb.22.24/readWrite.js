const fs = require('fs');

fs.readFile('in.txt', 'utf8', function(err, data) {
    console.log("Read: ", data); // Print the read data

    fs.writeFile('out.txt', 'utf8', function(err) {
        console.log("Write: ", data); // Print the written data
    });
});
