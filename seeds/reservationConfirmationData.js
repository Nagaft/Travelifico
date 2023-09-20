const { ReservationConfirmation } = require('../models');

const reservationConfirmationData = [
  {
    restaurant_id: 1, // Reemplaza con el ID del restaurante relacionado
    scheduled_time: '2023-09-15 18:30:00',
  },
  {
    restaurant_id: 2, // Reemplaza con el ID del restaurante relacionado
    scheduled_time: '2023-09-16 19:00:00',
  },
  // Puedes agregar más confirmaciones de reserva aquí
];

const seedReservationConfirmations = () => ReservationConfirmation.bulkCreate(reservationConfirmationData);

module.exports = seedReservationConfirmations;
