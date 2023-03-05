// import fetch from 'node-fetch';
// globalThis.fetch = fetch;

const { calcWindEnergy, calcSolarEnergy } = require("./calculations");
const createJob = require("./createJob");
const chalk = require('chalk');

function RequestData(range, job, location, coordinates, city) {
    const fetch = require("node-fetch");

    console.log(chalk.blue(`Fetching weather data for ${city}, ${location}\n`))

    fetch(`https://api.weather.gov/points/${coordinates}`)
   .then((response) => response.json()).then((data) => {

    const forecastHourlyLink = data['properties']['forecastHourly'];

    fetch(forecastHourlyLink).then((response2) => response2.json()).then((data2) => {
        // console.log(data2['properties']['periods']);
        // (data2['properties']['periods']).forEach(function(number) {
        //     if (number['number'] === '25') 
        //     console.log(number);

        // });
        let time = new Date()
        time.setMinutes(time.getMinutes()+1)
        let bestTime = time
        let max = 0
        console.log(chalk.yellow(`Finding optimal time...`))
        for (let i = 0; i < range; i++) {
            // console.log("hour number " + i + " HOUR NUMBER HOUR NUMBER")
            // console.log(data2['properties']['periods'][i]['windSpeed']) 
            // console.log(data2['properties']['periods'][i]['windDirection'])
            // console.log(data2['properties']['periods'][i]['shortForecast'])

            

            let windSpeed = data2['properties']['periods'][i]['windSpeed']
            let windDirection = data2['properties']['periods'][i]['windDirection']
            let shortForecast = data2['properties']['periods'][i]['shortForecast']
            let temperature = data2['properties']['periods'][i]['temperature']
            shortForecast.replace()

            let new_time = new Date()
            new_time.setMinutes(new_time.getMinutes()+1)
            new_time.setHours(time.getHours()+i)
            let windEnergy = calcWindEnergy(parseInt(windSpeed.split(" ")[0]), location)
            let solarEnergy = calcSolarEnergy(shortForecast, new_time, location, parseInt(temperature))
            
            //console.log(`Time: ${new_time}, Wind Energy: ${windEnergy}, Solar Energy: ${solarEnergy}`)
            if (windEnergy + solarEnergy > max) {
                bestTime = new_time
                max = windEnergy + solarEnergy
            }
           
        }

        // bestTime = new Date()
        // bestTime.setMinutes(time.getMinutes()+1)

        
        console.log(chalk.green.bold(`Optimal Time Found! Job will run on the ${bestTime.getDate()}th, at ${bestTime.getHours()}:${bestTime.getMinutes()} (24 HR Time)`))
        // console.log(`${bestTime}`)
        
        createJob(bestTime, job)

    });
    


});

}

//RequestData(12, "echo Hello", "Wisconsin")


// class RequestData() {

// }

// export default RequestData;
module.exports = RequestData