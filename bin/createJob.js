const executeJob = require("./executeJob")

function createJob(bestTime, job) {
    // ...
    const cron = require("node-cron")

    // Schedule tasks to be run on the server.
    let minute = bestTime.getMinutes();
    let hours = bestTime.getHours();
    let day = bestTime.getDate();
    // console.log(`${minute} ${hours} ${day} * *`)
    let task = cron.schedule(`${minute} ${hours} ${day} * *`, () => {
        executeJob(job, task)
    });
    

    // console.log(`${bestTime.getHours()}:${bestTime.getMinutes()}`)
}

module.exports = createJob