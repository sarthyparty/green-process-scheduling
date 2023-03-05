// import fetch from 'node-fetch';
// globalThis.fetch = fetch;

function RequestData() {
    const fetch = require("node-fetch");

    fetch("https://api.weather.gov/points/43.0722,-89.4008")
   .then((response) => response.json()).then((data) => {

    const forecastHourlyLink = data['properties']['forecastHourly'];

    fetch(forecastHourlyLink).then((response2) => response2.json()).then((data2) => {
        console.log(data2['properties']['periods']);
        (data2['properties']['periods']).forEach(function(number) {
            if (number['number'] === '25') 
            console.log(number);

        });
        for (let i = 0; i < 24; i++) {
            console.log("hour number " + i + " HOUR NUMBER HOUR NUMBER")
            console.log(data2['properties']['periods'][i]['windSpeed']) 
            console.log(data2['properties']['periods'][i]['windDirection'])
            console.log(data2['properties']['periods'][i]['shortForecast'])
        }
    });


});


  

}



// class RequestData() {

// }

// export default RequestData;
RequestData();