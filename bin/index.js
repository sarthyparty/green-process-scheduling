#!/usr/bin/env node
const argv = require('yargs')
  .usage('Usage: gschedule <command> [options]')
  .command('create', 'Schedules a job to be run.')
  .example('gschedule create -s "echo hello world"', 'Create a scheduled job')
  .alias('s', 'script')
  .nargs('f', 1)
  .describe('f', 'Load a file')
  .demandOption(['f'])
  .help('h')
  .alias('h', 'help').argv


