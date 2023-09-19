const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('../create-account', (req, res) => {
  res.sendFile(__dirname + '../views/register.html');
});
console.log(User)

router.post('/register', async (req, res) => {
  try {
    // const { email, password } = req.body;
    // console.log('registro exitoso');
const userData =  await User.create(req.body);
console.log (userData);

res.status(200).json(userData);
    // res.redirect('/success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Registration failed. Please try again.');
  }
});

// router.get('/reset-password', (req, res) => {
//   res.render('reset-password', { resetLink: `${baseURL}/reset-password` });
// });

// router.post('/reset-password', async (req, res) => {
//   const userEmail = req.body.email;

//   const resetToken = crypto.randomBytes(20).toString('hex');
  
//   // Store the reset token and associated email in your database
//   // (You'll need a database for this)

//   const resetLink = `${baseURL}/reset-password/${resetToken}`;

//   const msg = {
//     to: userEmail,
//     from: 'travelificoagency@gmail.com', // Replace with your sender email
//     subject: 'Password Reset',
//     html: `Click <a href="${resetLink}">here</a> to reset your password.`,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log('Password reset email sent');
//     res.redirect('/login');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

module.exports = router;
