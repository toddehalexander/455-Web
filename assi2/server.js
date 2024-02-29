const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Handle URL parameters
app.get('/:copies', (req, res) => {
    const copies = parseInt(req.params.copies);

    // Call the copyFile function
    copyFile(copies);

    // Respond with a message
    res.send(`Number of copies made: ${copies}`);
});

// Copy the file
function copyFile(copies) {
    const originalContent = fs.readFileSync('original.txt', 'utf8');

    for (let i = 1; i <= copies; i++) {
        const fileName = `copy_${i}.txt`;
        fs.writeFileSync(fileName, originalContent);
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});