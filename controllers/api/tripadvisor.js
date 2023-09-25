
import('node-fetch')
  .then((data) => {
    const foodTypes = [];
    const querysInsert = [];
    const restaurantsQuerysInsert = [];
    // CITIES
    // IDs CITIES 
    /*
      CDMX 150800
    */
    querysInsert.push("INSERT INTO `travelifico_db`.`cities`(`id`,`name`)VALUES(150800,'CDMX');")

    const headers = {
      'X-RapidAPI-Key': '57e31448e3msh4e69f6c458e2cc3p1a56c8jsn30d59b107abb',
      //'X-RapidAPI-Key': 'f8d5113bcamsh26f11eb2e8c0ce2p1c5f82jsnf7ff5e14323',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    };
    const params = {
      locationId: '150800', // ID DE LA CIUDAD
      page: '1'
    };
    const fetch = data.default;
    const apiUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants';
    const url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch (url,
      {
        method:'GET',
        headers,
      })
      .then((response) =>{
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((taData) => {
        // Handle and use the Yelp API data
        console.log('tripadvisor16 API response:', taData);
        for(const taRestaurant of taData.data.data) {
          // console.log(taRestaurant);
          restaurantsQuerysInsert.push("INSERT INTO `travelifico_db`.`restaurants`(`name`,`city_id`, `food_types`)VALUES('" + taRestaurant.name + "', " + params.locationId + ", '" + taRestaurant.establishmentTypeAndCuisineTags + "');")
          for(const footType of taRestaurant.establishmentTypeAndCuisineTags) {
            foodTypes.push(footType)
          }
        }
        const uniqueFoodTypes = [...new Set(foodTypes)];
        for(const uniqueFoodType of uniqueFoodTypes) {
          querysInsert.push("INSERT INTO `travelifico_db`.`food_types`(`name`)VALUES('" + uniqueFoodType + "');")
        }
        console.log(querysInsert);
        console.log(restaurantsQuerysInsert);
      })
      .catch((error) => {
        console.error('Error fetching data from tripadvisor16 API:', error);
      });
      
  })
  .catch((error) => {
    console.error('Error importing fetch:', error);
  });




/*async function realizarSolicitud() {
    const apiUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants';
    const params = {
        locationId: '150800',
        page: '1'
    };
    const headers = {
        'X-RapidAPI-Key': '57e31448e3msh4e69f6c458e2cc3p1a56c8jsn30d59b107abb',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    };

    const url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
        // Realiza la solicitud GET con los encabezados y espera la respuesta
        const response = await import('node-fetch').fetch(url, { method: 'GET', headers: headers });

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }    
        const data = await response.json(); // Si esperas una respuesta JSON
        console.log('Respuesta JSON:', data);
      } catch (error) {
        console.error('Error:', error);
    }
}

realizarSolicitud();*/