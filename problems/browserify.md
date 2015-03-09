# browserify

setup browserify

## Install browserify

    npm i browserify --save-dev
    json -I -f "package.json" \
    -e "this.scripts.build = 'browserify app/index.js -o public/bundle.js'"

## Verify Changes

    $ADVENTURE_COMMAND verify