// api/reservationConfirmationRoutes.js
const express = require('express');
const router = express.Router();
const reservationConfirmationController = require('../../controllers/reservationConfirmation-controller');

// Rutas de API para la confirmación de reservas
router.post('/', async (req, res) => {
  try {
    const reservationConfirmation = await reservationConfirmationController.createReservationConfirmation(req.body);
    res.json(reservationConfirmation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
