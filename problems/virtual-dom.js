var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# Virtual DOM / vbridge

For our client side we are going to use the virtual-dom module
to dynamically modify our presentation when state changes.

## Modify app/index.js

    var app = require('vbridge');
    var state = app.state({
      title: 'Ignite Board',
      img: '/test-img.jpg'
    });
    app(document.body, state, render);
    function render(state) { return null; }

## Install vbridge and virtual-dom

    npm i vbridge --save

## Verify Changes

    $ADVENTURE_COMMAND verify

`);

exports.verify = function(args, cb) { cb(true); };

// exports.verify = verify(function(args, t) { 
//   // confirm file by equals
//   // confirm package.json
// });
