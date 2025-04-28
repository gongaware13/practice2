// Import express module
const express = require('express');

// Create an express application
const app = express();

// Define the port number
const PORT = 8000;

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
})