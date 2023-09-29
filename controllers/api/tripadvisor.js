window.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchBtn');
    // if(searchButton){
    //     this.alert("AAAAA");
    //     console.log("aaaaaaaa");
    // }
    var cityEl = document.getElementById('city');

    /**
     * Obtiene la ubicacion de una ciudad por nombre
     * @param {string} ciudad Ciudad de donde obtener la ubicacion
     * @returns Un objeto con la ubicacion de la ciudad
     */
    async function getLocation(ciudad) {
        const apiUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${ciudad}&offset=0&limit=5`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '995eafbf84msh62c8e7a7db73e86p1d76f4jsnb5025ca27ef8',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(apiUrl, options);

            if (!response.ok) {
                throw new Error(`Imposible to get information from Api ${response.status}`)
            }
            const data = await response.json();
            return data;

        } catch (error) {
            console.log("Error fetching data " + error);
            throw error;
        }
    }

    /**
     * Obtiene los restaurantes de una ciudad por nombre
     * @param {string} ciudad Ciudad de donde obtener la ubicacion
     * @returns Una promesa que modifica el DOM y agrega los restaurantes
     * de la ciudad como elementos <li> con sus nombres, fotos y tipo de menu.
     */
    async function getRestaurants(ciudad) {
        try {
            if (!ciudad) {
                return;
            }

            const location = await getLocation(ciudad);
            const lugar = location.data[0].locationId;
            const apiUrl = `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${lugar}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '995eafbf84msh62c8e7a7db73e86p1d76f4jsnb5025ca27ef8',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                },
            };

            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                throw new Error("Cannot connect to the API " + response.status);
            }
            const responseData = await response.json();
            /** @type {Array} */
            const restaurantes = responseData.data.data;

            if (restaurantes?.length > 0) {
                /** @type {HTMLLIElement[]} */
                const liElements = restaurantes.map(restaurante => {
                    const li = document.createElement("li");
                    li.innerHTML = /*html*/`
                    <div class="w-200 h-200 bg-white rounded-lg shadow-md">
                    <!-- Imagen del Restaurante -->
                    <img src="${restaurante.heroImgUrl}" alt="Imagen ${restaurante.name}" class="w-full h-52 object-cover rounded-t-lg reducir-tamaño">
                    <!-- Componente de Restaurante -->
                    <div class="p-4">
                        <!-- Nombre del Restaurante -->
                        <h1 class="text-2xl font-semibold mb-2">${restaurante.name}</h1>
                        
                        <!-- Tipos de Comida -->
                        <p class="text-gray-600">Tipos de Comida: <span class="text-black">${restaurante.establishmentTypeAndCuisineTags.toString()}</span></p>
                    </div>
                    </div>
                    `;

                    return li;
                });

                const list = document.getElementById("restaurantes");
                if (list?.innerHTML) {
                    list.innerHTML = null;
                }
                for (const li of liElements) {
                    list?.appendChild(li);
                }
            }
        }
        catch (error) {
            console.log(`cannot get data error: ${error}`);
        }

    }

    searchButton.addEventListener('click', function () {
        const cityName = cityEl.value;
        getRestaurants(cityName);
    });
});







