#Setup
### NodeJS/npm
### Bower
### Git
### 
#CodeBase Explained
## Graphics
## App
### Directives
### Views
### Components
## Other
###.travis.yml
###karma.conf.js
###package.json
###Gruntfile.js

#Running/Testing
This app uses grunt to build, concat and/or uglify all necessary js and html files into the main file at dist/app.js. The dist/app.js file is pointed to in app/index.html which is the main index.html pointed to from the host server. All changes/updates should be made on files in the app/views/ directory. The app/ directory should be pointed to for all host servers.

To start, use: npm run build

For all standard builds, the app will run at localhost:8080/app

## Building/Running Utilities
### NodeJS/npm
### Bower
### Grunt
## Testing
### Karma
### Travis
### Protractor (currently not used)