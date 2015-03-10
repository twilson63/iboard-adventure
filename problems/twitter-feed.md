# Twitter Feed

We are going to hard code it for now.

## Install twitter module

    npm i node-tweet-stream

## Create config.json file

    {
      "consumer_key": "...",
      "consumer_secret": "...",
      "token":"...",
      "token_secret": "..."
    }

## Twitter Follow Code append to server.js

    var cfg = require('./config.json');
    var tw = require('node-tweet-stream')(cfg);

    var title = '#' + process.argv[2];
    tw.track(title);

    tw.on('tweet', function(tweet){
      if (tweet.entities.media) {
        io.emit('img', tweet.entities.media[0].media_url);
      }
    });

## Ready to get started:

    $ADVENTURE_COMMAND verify

