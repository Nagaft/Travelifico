// controllers/yelpController.js
const API_KEY = 'Totunefii-aLUwUNCs3ubMZY95KqUlsDbEOtAafQOx0OtSiIyGy6J-rkleGHeoM43BVp24H3HJ2CmZjaKD9xY-wQ5kCRijbeh_SN6z-kiXGecXfq1i6XsPAaH2cKZXYx'
; 

import('node-fetch')
  .then((data) => {
    const fetch = data.default;
    const yelpApiUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${favoriteFood}&limit=10`;

    fetch (yelpApiUrl,
      {
        method:'GET',
        headers:{
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) =>{
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((yelpData) => {
        // Handle and use the Yelp API data
        console.log('Yelp API response:', yelpData);
      })
      .catch((error) => {
        console.error('Error fetching data from Yelp API:', error);
      });
      
  })
  .catch((error) => {
    console.error('Error importing fetch:', error);
  });

/*



*/