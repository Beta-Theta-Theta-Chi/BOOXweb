module.exports = function(config){
  config.set({

    basePath : './',
    frameworks: ['jasmine'],
    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'app/components/**/*.js',
      
      'app/views/*.js',
      'app/views/**/*.js',
      'app/directives/*.js',
      'app/directives/**/*.js'
    ],

    preprocessors: {
      'app/templates/*.html': 'ng-html2js'
    },
    reporters: [ 'progress' ],
    colors: true,
    autoWatch: false,
    browsers: [ 'PhantomJS'], // , 'Chrome', 'Firefox'
    singleRun: true,
    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-junit-reporter'
    ],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
