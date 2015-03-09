var msee = require('msee');

exports.problem = msee.parse(`
# Twitter Feed

We are going to hard code it for now.

## Install twitter module

    npm i twitter

## Add feed follow to server.js

    var twitter = require('twitter');

    twitter.stream('#foo', function(e, tweet) {
      if (img) {
        io.broadcast('img', img.url);
      }
    });


## Ready to get started:

    $ADVENTURE_COMMAND verify

`);

exports.verify = function(args, cb) { cb(true); };