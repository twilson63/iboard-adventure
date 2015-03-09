var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/hyperscript.md', 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };
/*
exports.verify = verify(function(args, t) { 
  // confirm file by equals
  // confirm package.json
});
*/