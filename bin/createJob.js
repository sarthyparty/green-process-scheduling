function createJob(bestTime, job) {
    // ...

    // Schedule tasks to be run on the server.
    let minute = bestTime.getMinutes;
    let hours = bestTime.getHours;
    let day = bestTime.day;
    cron.schedule(`${minute} ${hours} ${day} * *`, function() {
        executeJob(job)
    });

    console.log(`${bestTime.getHours()}:${bestTime.getMinutes()}`)
}

module.exports = createJob