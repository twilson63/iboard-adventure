var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');
var path = require('path');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/static-server.md', 'utf-8')
);

exports.verify = verify(function(args, t) { 
  // check package.json and confirm ecstatic 
  var cwd = process.cwd();
  var pkg = require(cwd + '/package.json');
  if (!pkg.dependencies.ecstatic) { 
    console.log('Missing ecstatic from package.json');
    t.ok(false);
    t.end();
    return;
  }
  // run server and confirm index.html
  require(path.resolve('server.js'));
  var request = require('request');
  request('http://localhost:3000', function(e,r,b) {
    t.ok(/<title>Ignite Board<\/title>/.test(b));
    t.end();
    setTimeout(function() { process.exit(0); }, 50);
  });

});