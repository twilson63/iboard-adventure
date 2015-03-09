#!/usr/bin/env node

require('babel/register');
var adventure = require('adventure');
var shop = adventure('iboard-adventure');

var problems = [
  'welcome',
  'setup',
  'html',
  'static-server',
  'virtual-dom',
  'hyperscript',
  'browserify',
  'socket-io',
  'twitter-feed',
  'ship-it'
];

problems.forEach(function(problem) {
  shop.add(problem, function() {
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));


