// Import express module
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Create an express application
const app = express();
app.use(cors());
app.use(express.static('public')); // Serve the 'public' folder to front end

// Define the port number
const PORT = 8000;

// Define a route for GET request to get FENs as JSON
app.get('/getFENs', (req, res) => {
    const folderPath = path.join(__dirname, 'data');
  
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read folder' });
        }

        const txtFiles = files.filter(f => f.endsWith('.txt'));
        const results = {};

        let pending = txtFiles.length;
        if (pending === 0) return res.json(results);

        txtFiles.forEach(file => {
            const fullPath = path.join(folderPath, file);
            fs.readFile(fullPath, 'utf-8', (err, content) => {
                if (!err) {
                    results[file] = content;
                } else {
                    results[file] = null;
                }

                pending--;
                if (pending === 0) {
                    res.json(results);
                }
            });
        });
    });
});

//Define a route for GET request to the root URL ('/')
app.get('/', (req, res) => {
    // Send back some JSON data when this route is accessed
    res.json({
        message: 'Welcome to my Express server!',
        data: { key: 'value' },
    })
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});