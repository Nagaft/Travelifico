const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail'); // Import the SendGrid library

// Set your SendGrid API key
sgMail.setApiKey('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');

router.get('/reset-password', (req, res) => {
  res.render('reset-password'); // Render the password reset form HTML
});

router.post('/reset-password', (req, res) => {
  const userEmail = req.body.email;

  // Generate a unique reset token (you can customize this)
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Store the reset token and associated email in your database
  // (You'll need a database for this)

  // Create a password reset link with the token
  const resetLink = `http://yourwebsite.com/reset-password/${resetToken}`;

  // Send the reset link to the user's email using SendGrid
  const msg = {
    to: userEmail,
    from: 'travelificoagency@gmail.com', // Replace with your sender email
    subject: 'Password Reset',
    html: `Click <a href="${resetLink}">here</a> to reset your password.`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Password reset email sent');
      res.redirect('/login'); // Redirect to the login page or a confirmation page
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
