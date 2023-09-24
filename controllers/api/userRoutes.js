const router = require('express').Router();
const { User } = require('../../models');
// const yelpController = require('../../controllers/yelpController');
//const taController = require('../../controllers/api/tripadvisor');

router.get('/', (req, res) => {
  res.render('login');
});
// CREATE NEW USER
router.post('/create-account', async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;
    const existingUser = await User.findOne({
      where: { email: email },
    });
    
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }
    const newUser = await User.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    
    res.status(201).json({ message: 'Account created successfully.' });
  } catch (error) {
    console.error('Account creation failed:', error);
    //res.status(500).json({ message: 'Account creation failed. Please try again.' });
    res.render("homepage");
      res.redirect("homepage");
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
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (error) {
    console.error('Login failed:', error);
    // res.status(500).json(error);
    res.render("homepage");
      res.redirect("homepage");
  }
});

module.exports = router;
