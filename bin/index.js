#!/usr/bin/env node
const yargs = require('yargs');
const getLocation = require('./getLocation');
// .usage('Usage: gschedule <command> [options]')
// .command('create', 'Schedules a job to be run.')
// .example('gschedule create -s "echo hello world"', 'Create a scheduled job')
// .alias('s', 'script')
// .nargs('f', 1)
// .describe('f', 'Load a file')
// .demandOption(['f'])
// .help('h')
// .alias('h', 'help').argv

yargs.usage('Usage: gschedule <command> [options]')

yargs.command({
  command: 'create',
  describe: 'Create scheduled job',
  builder: {
    name: {
      describe: 'Name of job',
      demandOption: true,
      type: 'string'
    },
    command: {
      describe: 'Command to run',
      demandOption: true,
      type: 'string'
    },
    eta: {
      describe: 'Time to run job',
      demandOption: true,
      type: 'string'
    },
    range: {
      describe: 'Time to run job',
      demandOption: true,
      type: 'number'
    },
  },
  handler(argv) {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes()
    let [hours, minutes] = argv.eta.split(':')
    console.log(`Scheduling job ${argv.name}: <${argv.command}>`)
    getLocation(argv.range-hours, argv.command)
  }
})

yargs.parse()


