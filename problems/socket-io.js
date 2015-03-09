var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# socket.io

## Install

    npm i socket.io --save

## Configure Server server.js

    var io = require('socket.io');
    io.connect(function(socket) {
      console.log('socket connected');
    });

## Configure Client app/index.js

    // socket client
    var io = require('socket.io');
    var client = io.connect();
    client.on('img', function(imgUrl) {
      state.set('img', imgUrl);
    });

## Verify Changes

    $ADVENTURE_COMMAND verify

`);

exports.verify = verify(function(args, t) { 
  // confirm file by equals
  // confirm package.json
});
