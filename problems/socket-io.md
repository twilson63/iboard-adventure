# socket.io

## Install

    npm i socket.io --save
    npm i socket.io-client --save

## Configure Server server.js

    var io = require('socket.io').listen(server);
    tw.on('tweet', function(tweet){
      if (tweet.entities.media) {
        io.emit('img', tweet.entities.media[0].media_url);
      }
    });

    io.on('connection', function(socket) {
      socket.emit('title', 'Ignite Board - ' + title);
    });

## Configure Client app/index.js

    // socket client
    var io = require('socket.io-client')(window.location.href);

    io.on('img', function(imgUrl) {
      console.log(imgUrl);
      state.set('img', imgUrl);
    });

    io.on('title', function(title) {
      state.set('title', title);
    });

## Verify Changes

    $ADVENTURE_COMMAND verify
