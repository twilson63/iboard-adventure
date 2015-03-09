var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# browserify

setup browserify

## Install browserify

    npm i browserify --save-dev
    json -I -p "package.json" -e "this.scripts.build = 'browserify app/index.js -o public/bundle.js'"

## Verify Changes

    $ADVENTURE_COMMAND verify

`);

exports.verify = verify(function(args, t) { 
  // confirm file by equals
  // confirm package.json
});
