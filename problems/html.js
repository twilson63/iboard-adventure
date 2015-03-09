var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# Html

We need to modify our index.html file to contain the following:

    <!doctype html>
    <html>
      <head>
        <title>Ignite Board</title>
      </head>
      <body>
        <script src="bundle.js"></script>
      </body>
    </html>

## Verify Changes

    $ADVENTURE_COMMAND verify

`);

exports.verify = function(args, cb) { cb(true); };