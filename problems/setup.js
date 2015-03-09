var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/setup.md'), 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };

// exports.verify = verify(function(args, t) {
//   // check cwd
//   // check package.json
//   // confirm scripts section
//   // check public directory
//   // check app directory

// });