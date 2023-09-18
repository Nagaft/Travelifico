// api/restaurantListRoutes.js
const express = require('express');
const router = express.Router();
const restaurantListController = require('../../controllers/restaurantList-controller');

// Rutas de API para la lista de restaurantes
router.get('/', async (req, res) => {
  try {
    const restaurantList = await restaurantListController.getRestaurantList();
    res.json(restaurantList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const restaurantList = await restaurantListController.getRestaurantListById(req.params.id);
    if (!restaurantList) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurantList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
