function executeJob(job, task) {
    const { exec } = require('child_process')

    console.log("Executing job now!")
    exec(job, (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        console.log(`Job executed. Output: ${output}`)
        task.stop()

    })
}

module.exports = executeJob