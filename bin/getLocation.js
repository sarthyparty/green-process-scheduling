const { exec } = require('child_process')
// run the `ls` command using exec
var ip = ""
exec('curl ifconfig.me', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    exec(('curl ipinfo.io/' +  output), (err2, output2) => {
        if (err) {
            console.error("could not execute command: ", err2)
            return
        }

        const geographicJSON = JSON.parse(output2)

        console.log(geographicJSON['region'])

    //     const fetch = require("node-fetch");

    //     fetch("https://api.weather.gov/points/43.0722,-89.4008")
    //    .then((response) => response.json()).then((data) => {
    
    
    // });
    
    })
    
})

function getLocation() {



    // const successCallback = (position) => {
    //     console.log(position);
    //   };
      
    //   const errorCallback = (error) => {
    //     console.log(error);
    //   };
      
    //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}
// if ("geolocation" in navigator) {
//     console.log("in navigator")
//   } else {
//     console.log("not in navigator")
//   }
getLocation()