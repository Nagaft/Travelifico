const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// Define the route for displaying the registration form
router.get('/create-account', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

// Handle the registration form submission
router.post('/register', async (req, res) => {
    try {
        // Create a new user using data from the request body
        const userData = await User.create(req.body);
        console.log(userData);
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Registration failed. Please try again.');
    }
});

// Define the route for displaying the user profile
router.get('/profile', (req, res) => {
    // Fetch the user's data from your database or wherever it's stored
    // For this example, we'll assume you have a user object with an 'email' property
    const user = {
        email: 'user@example.com', // Replace with the user's actual email
        // Add other user data as needed
    };

    // Render the profile.html template and pass user data to it
    res.render('profile', { user });
});

// Placeholder for other routes
// ...

module.exports = router;
