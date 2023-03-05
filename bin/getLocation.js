const RequestData = require("./RequestData")

function getLocation(range, job) {
    const { exec } = require('child_process')
    // run the `ls` command using exec
    var ip = ""
    exec('curl ifconfig.me', (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        exec(('curl ipinfo.io/' + output), (err2, output2) => {
            if (err) {
                console.error("could not execute command: ", err2)
                return
            }

            const geographicJSON = JSON.parse(output2)
            RequestData(range, job, geographicJSON['region'])

        })
    })
}

module.exports = getLocation

