# socket.io

## Install

    npm i socket.io --save
    npm i socket.io-client --save

## Configure Server append to server.js

    var io = require('socket.io').listen(server);
    io.on('connection', function(socket) {
      socket.emit('title', 'Ignite Board - ' + title);
    });

## Configure Client append to app/index.js

    // socket client
    var io = require('socket.io-client')(window.location.href);

    io.on('img', function(imgUrl) {
      state.set('img', imgUrl);
    });

    io.on('title', function(title) {
      state.set('title', title);
    });

## Verify Changes

    $ADVENTURE_COMMAND verify
