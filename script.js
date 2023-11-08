const  cityWeatherData = [
   {
        city: "New York",
        temperature: "18°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Los Angeles",
        temperature: "25°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Chicago",
        temperature: "12°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "Miami",
        temperature: "28°C",
        additionalInfo: "Clear"
    },
    {
        city: "Houston",
        temperature: "22°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "San Francisco",
        temperature: "17°C",
        additionalInfo: "Foggy"
    },
    {
        city: "Seattle",
        temperature: "10°C",
        additionalInfo: "Rainy"
    },
    {
        city: "Boston",
        temperature: "16°C",
        additionalInfo: "Showers"
    },
    {
        city: "Phoenix",
        temperature: "30°C",
        additionalInfo: "Hot"
    },
    {
        city: "Denver",
        temperature: "20°C",
        additionalInfo: "Windy"
    },
    {
        city: "Dallas",
        temperature: "24°C",
        additionalInfo: "Clear"
    },
    {
        city: "Philadelphia",
        temperature: "19°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Atlanta",
        temperature: "23°C",
        additionalInfo: "Sunny"
    },
    {
        city: "San Diego",
        temperature: "24°C",
        additionalInfo: "Clear"
    },
    {
        city: "Orlando",
        temperature: "27°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Las Vegas",
        temperature: "29°C",
        additionalInfo: "Clear"
    },
    {
        city: "Minneapolis",
        temperature: "8°C",
        additionalInfo: "Snowy"
    },
    {
        city: "Portland",
        temperature: "13°C",
        additionalInfo: "Showers"
    },
    {
        city: "Detroit",
        temperature: "15°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "San Antonio",
        temperature: "21°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "St. Louis",
        temperature: "14°C",
        additionalInfo: "Windy"
    },
    {
        city: "Baltimore",
        temperature: "20°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Charlotte",
        temperature: "22°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Tampa",
        temperature: "26°C",
        additionalInfo: "Clear"
    },
    {
        city: "Salt Lake City",
        temperature: "18°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Raleigh",
        temperature: "21°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Nashville",
        temperature: "23°C",
        additionalInfo: "Clear"
    },
    {
        city: "Sacramento",
        temperature: "21°C",
        additionalInfo: "Clear"
    },
    {
        city: "Kansas City",
        temperature: "17°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Columbus",
        temperature: "16°C",
        additionalInfo: "Showers"
    },
    {
        city: "Indianapolis",
        temperature: "17°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "New Orleans",
        temperature: "25°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Memphis",
        temperature: "23°C",
        additionalInfo: "Clear"
    },
    {
        city: "Oklahoma City",
        temperature: "19°C",
        additionalInfo: "Windy"
    },
    {
        city: "Louisville",
        temperature: "18°C",
        additionalInfo: "Showers"
    },
    {
        city: "Richmond",
        temperature: "20°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Hartford",
        temperature: "15°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "Omaha",
        temperature: "13°C",
        additionalInfo: "Windy"
    },
    {
        city: "Birmingham",
        temperature: "24°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Anchorage",
        temperature: "4°C",
        additionalInfo: "Rainy"
    },
    {
        city: "Albuquerque",
        temperature: "21°C",
        additionalInfo: "Clear"
    },
    {
        city: "El Paso",
        temperature: "27°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Portland (ME)",
        temperature: "14°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Providence",
        temperature: "16°C",
        additionalInfo: "Showers"
    },
    {
        city: "Des Moines",
        temperature: "11°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "Boise",
        temperature: "15°C",
        additionalInfo: "Windy"
    },
    {
        city: "Fresno",
        temperature: "26°C",
        additionalInfo: "Clear"
    },
    {
        city: "Charleston",
        temperature: "25°C",
        additionalInfo: "Clear"
    },
    {
        city: "Little Rock",
        temperature: "20°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Jacksonville",
        temperature: "27°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Mobile",
        temperature: "24°C",
        additionalInfo: "Clear"
    },
    {
        city: "Knoxville",
        temperature: "22°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Springfield",
        temperature: "13°C",
        additionalInfo: "Cloudy"
    },
    {
        city: "Syracuse",
        temperature: "10°C",
        additionalInfo: "Showers"
    },
    {
        city: "Chattanooga",
        temperature: "21°C",
        additionalInfo: "Sunny"
    },
    {
        city: "Santa Fe",
        temperature: "19°C",
        additionalInfo: "Partly Cloudy"
    },
    {
        city: "Lubbock",
        temperature: "22°C",
        additionalInfo: "Windy"
    }
]

function updateDashboard(){
    const weatherData =  cityWeatherData;

    const cityNameElement = document.getElementById("cityName");
    const temperatureElement = document.getElementById("temprature");
    const addictionalInfo = document.getElementById("addictionalInfo");


    cityNameElement.textContent = weatherData.city;
    temperatureElement.textContent = weatherData.temperature;
    addictionalInfo.textContent = weatherData.additionalInfo;

}
updateDashboard();


function populateDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");

    cityWeatherData.forEach(city => {
        const option = document.createElement("a");
        option.textContent = city.city;
        option.addEventListener("click", () => showWeather(city));
        dropdownContent.appendChild(option);
    });
}

function showWeather(cityData) {
    const cityNameElement = document.getElementById("cityName");
    const temperatureElement = document.getElementById("temperature");
    const additionalInfoElement = document.getElementById("additionalInfo");

    cityNameElement.textContent = cityData.city;
    temperatureElement.textContent = cityData.temperature;
    additionalInfoElement.textContent = cityData.additionalInfo;
}

populateDropdown();