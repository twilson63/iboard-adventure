var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# virtual-hyperscript

Add virtual-hyperscript to our app/index.js

## Modify app/index.js

    var app = require('vbridge');
    var state = app.state({ img: '/cats.png' });
    app(document.body, state, render);
    var h = require('virtual-dom/h');
    function render(state) { 
      return h('img', { src: state.get('img') }); 
    }


## Verify Changes

    $ADVENTURE_COMMAND verify

`);

exports.verify = verify(function(args, t) { 
  // confirm file by equals
  // confirm package.json
});
