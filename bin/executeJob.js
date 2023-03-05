function executeJob(job) {
    const { exec } = require('child_process')

    console.log("Executing job now!")
    exec(job, (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        console.log("Job executed!")
    })
}

module.exports = executeJob