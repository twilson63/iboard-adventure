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
  'socket-io',
  'twitter-feed'
];

problems.forEach(function(problem) {
  shop.add(problem, function() {
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));


