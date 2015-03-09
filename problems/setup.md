# Setup

So the first steps are to setup the project:

    npm install json -g 
    mkdir [project_name]
    cd [project_name]
    npm init -y 
    # answer or choose defaults
    mkdir public
    touch public/index.html
    touch server.js
    mkdir app
    touch app/index.js
    json -I -f "package.json" -e 'this.scripts.start="node server.js"'
    json -I -f "package.json" -e 'this.scripts.test="echo OK"'

## finally verify setup

    $ADVENTURE_COMMAND verify [project_name]