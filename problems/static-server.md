# Static Server

We are going to create a iojs static web server, that will
serve anything in the public directory.

## Modify server.js

    var http = require('http');
    var ecstatic = reqire('ecstatic');

    var server = http.createServer(ecstatic('public'));
    server.listen(process.env.PORT || 3000);

## Install ecstatic

    npm i ecstatic --save

## Hint: --save adds the dependency to package.json

## Verify Changes

    $ADVENTURE_COMMAND verify
