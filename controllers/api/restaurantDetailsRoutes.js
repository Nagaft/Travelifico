// api/restaurantDetailsRoutes.js
const express = require('express');
const router = express.Router();
const restaurantDetailsController = require('../../controllers/restaurantDetails-controller');

// Rutas de API para los detalles de restaurantes
router.get('/', async (req, res) => {
  try {
    const restaurantDetails = await restaurantDetailsController.getRestaurantDetails();
    res.json(restaurantDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const restaurantDetails = await restaurantDetailsController.getRestaurantDetailsById(req.params.id);
    if (!restaurantDetails) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurantDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
