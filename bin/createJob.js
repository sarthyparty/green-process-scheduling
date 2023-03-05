const executeJob = require("./executeJob")

function createJob(bestTime, job) {
    // ...
    const cron = require("node-cron")

    // Schedule tasks to be run on the server.
    cron.schedule('* * * * *', function() {
        executeJob(job)
    });

    // console.log(`${bestTime.getHours()}:${bestTime.getMinutes()}`)
}

module.exports = createJob