var msee = require('msee');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/welcome.md', 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };