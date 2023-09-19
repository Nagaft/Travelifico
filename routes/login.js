// userRoutes.js
const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Import your User model

// ...

// Define the route for displaying the login form
router.get('/login', (req, res) => {
  
  res.sendFile(__dirname + '/views/login.html'); // Adjust the path to your HTML file
});

// Define the route for handling the login form submission
router.post('/login', async (req, res) => {
  try {
    // Extract user data from the request body (e.g., email and password)

    // Check the user's credentials (e.g., validate email and password)

    // If login is successful, you can redirect to a dashboard or user profile page
    res.redirect('/dashboard');
  } catch (error) {
    // Handle login errors (e.g., invalid credentials)
    res.status(401).send('Login failed. Please check your credentials.');
  }
});

// ...

module.exports = router;

