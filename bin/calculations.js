function calcWindEnergy(speed) {
    return 0.5 * 1.2 * 100 * speed**3 * 0.3 * 7
}

function calcSolarEnergy(shortForecast, time){
    let dict = {

        "Slight Chance Rain Showers": 0.7,
        "Mostly Cloudy": 0.6,
        "Partly Cloudy": 0.7,
        "Mostly Clear": 0.8,
        "Partly Sunny": 0.7,
        "Mostly Sunny": 0.9,
        "Sunny": 1,
        "Chance Rain Showers": 0.5,
        "Showers and Thunderstorms": 0.4,
        "Rain Showers Likely": 0.6,
        "Slight Chance Light Snow": 0.4,
        "Chance Light Snow": 0.6,
        "Snow Likely": 0.5,
        "Heavy Snow Likely": 0.4,
        "Patchy Fog": 0.4,
        "Light Snow Likely": 0.6,
        "Light Snow and Patch Blowing Snow": 0.5
    }; 
    
    if(time.getHours() < 10 || time.getHours() > 18){
        return 0;
    }
    if(!(shortForecast in dict)){
        return 1.6369516 * 1380 * 0.2 * 0.5 * 1000 
    }else{
        return 1.6369516 * 1380 * 0.2 * (dict[shortForecast]) * 1000
    }
    
}

module.exports = {calcWindEnergy, calcSolarEnergy}

