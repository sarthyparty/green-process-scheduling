function createCronJob(bestTime, job) {

    const cron = require('node-cron');
    // ...

    // Schedule tasks to be run on the server.
    cron.schedule('* * * * *', function() {
        console.log('running a task every minute');
    });

    console.log(`${bestTime.getHours()}:${bestTime.getMinutes()}`)
}

module.exports = createCronJob