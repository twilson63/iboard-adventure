# virtual-hyperscript

Add virtual-hyperscript to our app/index.js

## Modify app/index.js

    var app = require('vbridge');
    var h = require('vbridge').h;
    var state = app.state({
      title: 'Ignite Board',
      img: '/test-img.jpg'
    });
    app(document.body, state, function render(state) { 
      return h('div', [
        h('h1', state.get('title')),
        h('img.full', { src: state.get('img') })
      ]);
    });


## Verify Changes

    $ADVENTURE_COMMAND verify
