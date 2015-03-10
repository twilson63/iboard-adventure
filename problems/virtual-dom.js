var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');
var path = require('path');
var jsdom = require('jsdom');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/virtual-dom.md', 'utf-8')
);

exports.verify = verify(function(args, t) { 
  // confirm package.json
  var cwd = process.cwd();
  var pkg = require(cwd + '/package.json');
  if (!pkg.dependencies.vbridge) { 
    console.log('Missing vbridge from package.json');
    t.ok(false);
    t.end();
    return;
  }

  require(path.resolve('server.js'));
  jsdom.env({
    url: 'http://localhost:3000',
    features: {
      FetchExternalResources: ["script"]
    },
    done: function(err, window) {
      console.log(window.document.body.outerHTML);
      var result = /<img src="\/test-img.jpg">/
        .test(window.document.body.outerHTML);
      t.ok(result, 'success');
      t.end();
      setTimeout(function() { process.exit(0); }, 50);
    }
  });

});