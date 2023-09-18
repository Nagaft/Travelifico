const router = require('express').Router();
const { check, validationResult } = require('express-validator'); // Importa check y validationResult desde express-validator

// Requerir los modelos de la base de datos
const { City, Date, FoodType, Person, Restaurant } = require('../models');

// Ruta principal (selección de ciudad, fechas, número de personas y tipo de comida)
router.get('/', async (req, res) => {
  try {
    // Obtener todas las ciudades disponibles
    const cities = await City.findAll();

    // Obtener todas las fechas disponibles
    const dates = await Date.findAll();

    // Obtener todos los tipos de comida disponibles
    const foodTypes = await FoodType.findAll();

    // Obtener todos los números de personas disponibles
    const persons = await Person.findAll();

    res.render('homepage', {
      cities,
      dates,
      foodTypes,
      persons,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Ruta para procesar la selección de ciudad (ejemplo de ruta POST)
router.post(
  '/select-city',
  [
    // Validar que el campo 'cityId' esté presente en la solicitud
    check('cityId').notEmpty().withMessage('City ID is required'),
  ],
  async (req, res) => {
    try {
      // Verificar si hubo errores de validación
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Obtener el ID de la ciudad seleccionada desde la solicitud POST
      const selectedCityId = req.body.cityId;

      // Realizar alguna lógica de filtrado o consulta con el ID de la ciudad

      // Redirigir o renderizar la página correspondiente con los resultados
      res.redirect('/restaurant-list'); // Puedes ajustar la ruta según sea necesario
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
);

// Resto de las rutas POST y lógica de validación similares a la anterior

module.exports = router;
