function getWindData() {
    abbrev_to_us_state = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }
    
    let wind = {
        "Alabama": 0,
        "Alaska": 0,
        "Arizona": 0,
        "Arkansas": 0,
        "California": 0,
        "Connecticut": 0,
        "Delaware": 0,
        "Florida": 0,
        "Georgia": 0,
        "Hawaii": 0,
        "Idaho": 0,
        "Illinois": 0,
        "Indiana": 0,
        "Iowa": 0,
        "Kansas": 0,
        "Kentucky": 0,
        "Louisiana": 0,
        "Maine": 0,
        "Maryland": 0,
        "Massachusetts": 0,
        "Michigan": 0,
        "Minnesota": 0,
        "Mississippi": 0,
        "Missouri": 0,
        "Montana": 0,
        "Nebraska": 0,
        "Nevada": 0,
        "New Hampshire": 0,
        "New Jersey": 0,
        "New Mexico": 0,
        "New York": 0,
        "North Carolina": 0,
        "North Dakota": 0,
        "Ohio": 0,
        "Oklahoma": 0,
        "Oregon": 0,
        "Pennsylvania": 0,
        "Rhode Island": 0,
        "South Carolina": 0,
        "South Dakota": 0,
        "Tennessee": 0,
        "Texas": 0,
        "Utah": 0,
        "Vermont": 0,
        "Virginia": 0,
        "Washington": 0,
        "West Virginia": 0,
        "Wisconsin": 0,
        "Wyoming": 0
    }
    
    const fs = require('fs')
    
    fs.readFile('bin/uswtdb_v5_3_20230113.csv', (err, input) => {
        if (err) throw err;
    
        let lines = input.toString().split("\n")
        for (let i = 0; i < lines.length; i++) {
            let columns = lines[i].split(",");
            //console.log(abbrev_to_us_state[columns[5]])
           wind[abbrev_to_us_state[columns[5]]] += 1
          
        }
    
    console.log(wind['New Mexico'])
    
    })
    

}




