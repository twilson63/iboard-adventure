var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/setup.md', 'utf-8')
);

//exports.verify = function(args, cb) { cb(true); };

exports.verify = verify(function(args, t) {
  // check cwd
  try {
    var cwd = process.cwd();
    var pkg = require(cwd + '/package.json');

    // confirm scripts section
    if (!pkg.scripts.start) {
      console.log('No Scripts Start node in package.json');
      t.ok(false);
      t.end();
      return;
    }
    // check public directory
    if (!fs.existsSync(cwd + '/public')) {
      console.log('No Public Directory created.');
      t.ok(false);
      t.end();
      return;
    }
    // check app directory
    if (!fs.existsSync(cwd + '/app')) {
      console.log('No App Directory created.');
      t.ok(false);
      t.end();
      return;
    }
    t.ok(true);
    t.end();
    
  } catch (e) {
    console.log('package.json is not found in current working directory');
    t.ok(false);
    t.end();
  }
});