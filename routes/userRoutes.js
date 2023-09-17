const express = require('express');
const router = express.Router();
const { User } = require('../models');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');

// Set your SendGrid API key (you should do this once when your server starts)
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

// Define a variable for your website's base URL
const baseURL = 'http://yourwebsite.com'; // Replace with your actual website URL

router.get('/register', (req, res) => {
  res.render('registration');
});

router.get('../create-account', (req, res) => {
  res.sendFile(__dirname + '../views/register.html');
});

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Perform data validation here (e.g., check email format, password strength)

    await User.create({ email, password });

    res.redirect('/success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Registration failed. Please try again.');
  }
});

router.get('/reset-password', (req, res) => {
  res.render('reset-password', { resetLink: `${baseURL}/reset-password` });
});

router.post('/reset-password', async (req, res) => {
  const userEmail = req.body.email;

  const resetToken = crypto.randomBytes(20).toString('hex');
  
  // Store the reset token and associated email in your database
  // (You'll need a database for this)

  const resetLink = `${baseURL}/reset-password/${resetToken}`;

  const msg = {
    to: userEmail,
    from: 'travelificoagency@gmail.com', // Replace with your sender email
    subject: 'Password Reset',
    html: `Click <a href="${resetLink}">here</a> to reset your password.`,
  };

  try {
    await sgMail.send(msg);
    console.log('Password reset email sent');
    res.redirect('/login');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
