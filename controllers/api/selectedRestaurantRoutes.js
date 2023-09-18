// api/selectedRestaurantRoutes.js
const express = require('express');
const router = express.Router();
const selectedRestaurantController = require('../../controllers/selectedRestaurant-controller');

// Rutas de API para restaurantes seleccionados
router.get('/', async (req, res) => {
  try {
    const selectedRestaurants = await selectedRestaurantController.getSelectedRestaurants();
    res.json(selectedRestaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const selectedRestaurant = await selectedRestaurantController.getSelectedRestaurantById(req.params.id);
    if (!selectedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(selectedRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
