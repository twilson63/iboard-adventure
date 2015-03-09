var msee = require('msee');

exports.problem = msee.parse(`
# Ship It

## Create Git repo

## Add to Github

## create heroku app

## Add to heroku

## Profit

## Ready to get started:

    $ADVENTURE_COMMAND verify

`);

exports.verify = function(args, cb) { cb(true); };