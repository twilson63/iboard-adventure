# Virtual DOM / vbridge

For our client side we are going to use the virtual-dom module
to dynamically modify our presentation when state changes.

## Modify app/index.js

    var app = require('vbridge');
    var h = app.h;
    var state = app.state({
      title: 'Ignite Board',
      img: '/test-img.jpg'
    });
    app(document.body, state, render);
    function render(state) { return h('div', [
        h('h1', state.get('title')),
        h('img.full', { src: state.get('img') })
      ]); 
    }

## Install vbridge and virtual-dom

    npm i vbridge --save

## Install browserify

    npm i browserify --save-dev
    json -I -f "package.json" \
    -e "this.scripts.build = 'browserify app/index.js -o public/bundle.js'"

## Browserify app/index.js

    npm run build

## Verify Changes

    $ADVENTURE_COMMAND verify
