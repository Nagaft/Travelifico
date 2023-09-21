// controllers/yelpController.js
const fetch = require('node-fetch'); // Asegúrate de tener 'node-fetch' instalado

const API_KEY = Totunefii-aLUwUNCs3ubMZY95KqUlsDbEOtAafQOx0OtSiIyGy6J-rkleGHeoM43BVp24H3HJ2CmZjaKD9xY-wQ5kCRijbeh_SN6z-kiXGecXfq1i6XsPAaH2cKZXYx
; 

exports.searchRestaurants = async (req, res, next) => {
  try {
    const { city, travelDate, numberOfPersons, favoriteFood } = req.body;

    // Construye la URL de la API de Yelp para buscar restaurantes
    const yelpApiUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${favoriteFood}&limit=10`;

    const response = await fetch(yelpApiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al buscar restaurantes en Yelp');
    }

    const restaurantData = await response.json();

    // Renderiza una vista o envía los datos como respuesta JSON
   // res.status(200).json(restaurantData);
   req.yelpinfo=restaurantData
    next();
  } catch (error) {
    console.error('Error al buscar restaurantes en Yelp:', error);
    res.status(500).json({ error: 'Hubo un error al buscar restaurantes en Yelp' });
  }
};

//