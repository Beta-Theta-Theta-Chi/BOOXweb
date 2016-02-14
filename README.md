# Setup
To get you started you can simply clone this repository and install the dependencies:

## Prerequisites:
### NodeJS/npm
We also use a number of node.js tools to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

### Grunt
In order to get started, you'll need to install Grunt's command line interface (CLI). You do not need to install globally.

```
npm install -g grunt-cli
```

### Clone BOOXweb
Clone this repository using [git][git]:
```
git clone https://github.com/sicter/BOOXweb
cd BOOXweb
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the tasks for install/testing/building of components via 'grunt', a [javaScript task runner][grunt]
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call the grunt task `bower`, which installs bower components.  You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

*Note that the `bower_components` folder is installed in the root folder, this location is set through the `.bowerrc` file.*

###CodeBase Explained
## Directory Layout (incomplete)

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  directives/
    footer/
    header/
    directives.js
  views/
    home/                --> the view1 view template and logic
      home.html            --> the partial template
      home.js              --> the controller logic
      home_test.js         --> tests of the controller
    view2/                --> the view2 view template and logic
      view2.html            --> the partial template
      view2.js              --> the controller logic
      view2_test.js         --> tests of the controller
    ...           --> other views follow the same structure
    views.js
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
.bowerrc
.gitignore
.jshintrc
.travis.yml
bower.json
Gruntfile.js
karma.conf.js         --> config file for running unit tests with Karma
package.json

^ denotes current unused
```

## Running the application
This app uses grunt to build, concat and/or uglify all necessary js and html files into the main file at dist/app.js. The dist/app.js file is pointed to in app/index.html which is the main index.html pointed to from the host server. All changes/updates should be made on files in the app/views/ directory. The app/ directory should be pointed to for all host servers.

To start: `npm run build`

For all standard builds, the app will run at localhost:8080/app

## Testing

### Travis
[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to the repository and execute scripts for running tests. This project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run the unit tests when a push is made to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more instruction on how to do this.

### Karma
### Jasmine
### Protractor

[git]: http://git-scm.com/
[grunt]: gruntjs.com
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
