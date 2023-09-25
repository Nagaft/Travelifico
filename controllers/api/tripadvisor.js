window.addEventListener('DOMContentLoaded',function(){
const  searchButton = document.getElementById('holiwis');
// if(searchButton){
//     this.alert("AAAAA");
//     console.log("aaaaaaaa");
// }
var cityEl = document.getElementById('city');

 async function  getLocation (ciudad) {

const apiUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${ciudad}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6567d95e4emshfe57e0b7f7b1df9p1ed06cjsnbbd7acbb83e0',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };
try {
   const response = await  fetch (apiUrl,options);
   
        if(!response.ok){
            throw new Error(`Imposible to get information from Api ${response.status}`)
        }
        const data =  await response.json();
        return data;

    } catch(error) {
        console.log("Error fetching data " + error);
        throw error;
    }
}

async function getRestaurants(ciudad){
    try {
    const  dati =  await getLocation(ciudad);
    console.log(dati);
    var lugar = dati.data[0].locationId;
const apiUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${lugar}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6567d95e4emshfe57e0b7f7b1df9p1ed06cjsnbbd7acbb83e0',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        },
    };
    const response = await fetch(apiUrl,options);
        if(!response.ok){
            throw new Error ("Cannot connect to the API " + response.status);
        }
    const data = await response.json();
       // const cityId =
        console.log(data);
}
    catch (error ) {
        console.log(`cannot get data error: ${error}`);
    }
    
}

searchButton.addEventListener('click', function() {
    const  cityName = cityEl.value;
    getRestaurants(cityName);
  });
 });





