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


module.exports = router;
