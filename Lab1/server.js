const fs = require('fs');

function readFile(callback) {
    fs.readFile('file.txt', 'utf8', (err, data) => {
        callback(null, data);
    }); 
}

function writeFile(fileName, content, callback) {
    fs.writeFile(fileName, content, err => {
    });
}
function duplicateFiles(copies, callback) {
    readFile((err, originalContent) => {
        for (let i = 1; i <= copies; i++) {
            const fileName = `copy_${i}.txt`;
            writeFile(fileName, originalContent, err => {
            });
        }
    });
}
function main() {
    readFile((err, copies) => {
        duplicateFiles(copies, err => {
            console.log('Files duplicated successfully.');
        });
    });
}

main();
