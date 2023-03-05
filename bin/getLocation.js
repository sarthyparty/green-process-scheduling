const RequestData = require("./RequestData")
const chalk = require('chalk');


function getLocation(range, job) {
    const { exec } = require('child_process')
    // run the `ls` command using exec
    var ip = ""
    exec('curl ifconfig.me', (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        console.log(chalk.blue(`Finding location using IP Address ${output}\n`))
        exec(('curl ipinfo.io/' + output), (err2, output2) => {
            if (err) {
                console.error("could not execute command: ", err2)
                return
            }

            const geographicJSON = JSON.parse(output2)
            // console.log(geographicJSON)
            // coordinates = geographicJSON['loc'].split(",")
            // console.log(geographicJSON['loc'])

            RequestData(range, job, geographicJSON['region'], geographicJSON['loc'], geographicJSON['city'])

        })
    })
}


module.exports = getLocation

