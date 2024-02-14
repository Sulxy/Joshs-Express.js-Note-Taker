// Purpose: This file is the main server file for the application.
// It sets up the server and the routes for the application.
const express = require('express');
const html_routes = require('./routes/html-routes.js');
const api_routes = require('./routes/api-routes.js');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(html_routes);
app.use(api_routes);   

// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT}!`);
    });
