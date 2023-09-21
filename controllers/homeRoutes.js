const router = require('express').Router();
const {User} = require('../models');
const express = require ('express');
const withAuth = require('../utils/auth');  
//const app = express();
router.get('/create-account',(req,res) =>{
  res.render('create-account')
});
router.get('/', (req, res) => {
    res.render('login'); // Adjust the path to your HTML file
  });

  //CREATE NEW USER
  router.post('/create-account', async (req, res) => {
    try {
      const { email, password, phoneNumber } = req.body;
     User.create({
        email: email,
        password: password,
        phoneNumber: phoneNumber
      });
      
      return res.status(200).json('Ahuevo');
  
  
    } catch (error) {
      console.error('Account creation failed:', error);
      res.status(500).send('Account creation failed. Please try again.');
    }
  });

  //with auth all users 
  router.get('/login', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['email', 'ASC']],
      });
      const users = userData.map((project) => project.get({ plain: true }));
      res.render('login', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/',(req,res) =>{
    res.render('login')
  });

  

  //LOGIN
  router.post('/login', async (req, res) => {
    const userpswd = req.body.password;
    const useremail = req.body.email;
  try {
   const user = await User.findOne({where:{email:useremail}});
    if (!user) {
      return res.status(400).json({ message: 'Incorrect email . Please try again!' });
    }
    const isPassValid = await user.comparePassword(userpswd);
    if (!isPassValid) {
      // return res.status(400).json({ message: 'Incorrect password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json({ user: user, message: 'You are now logged in!' });
    });


  }
  catch (error) {
    console.error('Login failed:', error);
    res.status(500).json(error);
  }
});
//  app.post('login', async (req, res) => {
//   const isAuthenticated = await authenticateUser(req.body.email, req.body.password);
//   if (isAuthenticated) {
//     res.redirect('/create-account'); // Redirect to home page
//   } else {
//     res.render('login', { errorMessage: 'Invalid email or password' });
//   }
// });

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/create-account');
    return;
  }
  //res.render('login');
});

  module.exports = router;
