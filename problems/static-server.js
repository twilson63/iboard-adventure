var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/static-server.md', 'utf-8')
);

exports.verify = verify(function(args, t) { 
  // check package.json and confirm ecstatic 
  // run server and confirm index.html
});