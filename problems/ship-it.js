var msee = require('msee');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/ship-it.md', 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };