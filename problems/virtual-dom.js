var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/virtual-dom.md')
);

exports.verify = function(args, cb) { cb(true); };

// exports.verify = verify(function(args, t) { 
//   // confirm file by equals
//   // confirm package.json
// });