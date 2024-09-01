const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// A simple API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
