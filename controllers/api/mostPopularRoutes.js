// api/mostPopularRoutes.js
const express = require('express');
const router = express.Router();
const mostPopularController = require('../../controllers/mostPopular-controller');

// Rutas de API para los lugares más populares
router.get('/', async (req, res) => {
  try {
    const mostPopular = await mostPopularController.getMostPopular();
    res.json(mostPopular);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
