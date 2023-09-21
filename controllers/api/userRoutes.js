const router = require('express').Router();
const { User } = require('../../models');
const yelpController = require('../../controllers/yelpController');

router.get('/', (req, res) => {
  res.render('login');
});
// CREATE NEW USER
router.post('/create-account', async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;
    const newUser = await User.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber
    });
    
    // Generate a verification code and send it via SMS (using your API)
    const verificationCode = generateVerificationCode();

    // Redirect to the validation page with the verification code as a query parameter
    res.redirect(`/validate?code=${verificationCode}`);
  } catch (error) {
    console.error('Account creation failed:', error);
    res.status(500).send('Account creation failed. Please try again.');
  }
});

// LOGIN SESSION
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    
    if (!dbUserData) {
      return res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }
    
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }

    req.session.save(() => {
      req.session.logged_in = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json(error);
  }
});

// Define the route for handling phone number verification
router.get('/validate', (req, res) => {
  const verificationCode = req.query.code; // Get the verification code from the query parameter

  // Render the validation page with the verification code
  res.render('validation', { verificationCode });
});

module.exports = router;
