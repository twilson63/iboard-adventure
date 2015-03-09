var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');
var jsdom = require('jsdom');


exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/html.md', 'utf-8')
);

exports.verify = function(args, cb) {
  var html = fs.readFileSync(process.cwd() + '/public/index.html', 'utf-8');
  console.log(html);
  if (
    /<script src="bundle.js"><\/script>/.test(html) &&
    /<title>Ignite Board<\/title>/.test(html)
  ) {
    cb(true);
  } else {
    console.log('Could not detect title and script tags in your html');
    cb(false);
  }
};