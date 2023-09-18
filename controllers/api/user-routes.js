// api/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');

// Rutas de API de usuario
router.post('/login', async (req, res) => {
  try {
    const user = await userController.login(req.body);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await userController.signup(req.body);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
