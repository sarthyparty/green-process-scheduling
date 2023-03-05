// creating dictionaries with amount of turbines, panels

let windData = {
    "Alabama": 0,
    "Alaska": 142,
    "Arizona": 286,
    "Arkansas": 1,
    "California": 5974,
    "Connecticut": 3,
    "Delaware": 1,
    "Florida": 0,
    "Georgia": 0,
    "Hawaii": 129,
    "Idaho": 541,
    "Illinois": 3551,
    "Indiana": 1614,
    "Iowa": 6220,
    "Kansas": 3962,
    "Kentucky": 0,
    "Louisiana": 0,
    "Maine": 417,
    "Maryland": 80,
    "Massachusetts": 92,
    "Michigan": 1631,
    "Minnesota": 2687,
    "Mississippi": 0,
    "Missouri": 1174,
    "Montana": 803,
    "Nebraska": 1541,
    "Nevada": 68,
    "New Hampshire": 84,
    "New Jersey": 6,
    "New Mexico": 1952,
    "New York": 1231,
    "North Carolina": 105,
    "North Dakota": 2134,
    "Ohio": 499,
    "Oklahoma": 5487,
    "Oregon": 2120,
    "Pennsylvania": 751,
    "Rhode Island": 35,
    "South Carolina": 0,
    "South Dakota": 1411,
    "Tennessee": 18,
    "Texas": 18586,
    "Utah": 208,
    "Vermont": 73,
    "Virginia": 2,
    "Washington": 1826,
    "West Virginia": 419,
    "Wisconsin": 451,
    "Wyoming": 1456
}

let sun = {
    "Alabama": 689,
    "Alaska": 63,
    "Arizona": 8278,
    "Arkansas": 354,
    "California": 75712,
    "Colorado": 7426,
    "Connecticut": 2275,
    "Delaware": 526,
    "Florida": 11761,
    "Georgia": 5314,
    "Hawaii": 2421,
    "Idaho": 586,
    "Illinois": 5520,
    "Indiana": 3858,
    "Iowa": 892,
    "Kansas": 971,
    "Kentucky": 1148,
    "Louisiana": 3210,
    "Maine": 684,
    "Maryland": 4872,
    "Massachusetts": 10548,
    "Michigan": 3941,
    "Minnesota": 4570,
    "Mississippi": 886,
    "Missouri": 2778,
    "Montana": 340,
    "Nebraska": 1548,
    "Nevada": 7193,
    "New Hampshire": 1101,
    "New Jersey": 6237,
    "New Mexico": 2013,
    "New York": 10524,
    "North Carolina": 6978,
    "North Dakota": 262,
    "Ohio": 7411,
    "Oklahoma": 868,
    "Oregon": 3968,
    "Pennsylvania": 4188,
    "Rhode Island": 1067,
    "South Carolina": 3377,
    "South Dakota": 479,
    "Tennessee": 4109,
    "Texas": 10346,
    "Utah": 6971,
    "Vermont": 1193,
    "Virginia": 4791,
    "Washington": 3950,
    "West Virginia": 372,
    "Wisconsin": 2942,
    "Wyoming": 152

}

function calcWindEnergy(speed, location) {
    return 0.5 * 1.2 * 100 * speed**3 * 0.3 * windData[location]
}

function calcSolarEnergy(shortForecast, time, location){
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
        return 1.6369516 * 1380 * 0.2 * 0.5 * 1000 * (sun[location])
    }else{
        return 1.6369516 * 1380 * 0.2 * (dict[shortForecast]) * 1000 * (sun[location])
    }
    
}

module.exports = {calcWindEnergy, calcSolarEnergy}

