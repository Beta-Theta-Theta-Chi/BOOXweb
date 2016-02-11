module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration will be written here
    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: 'app/bower_components',
          cleanTargetDir: false
        }
      }
    },

    // jshint: {
    //   all: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js' ]
    // },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: true
      },
          
      continuous: {
        singleRun: false,
        autoWatch: true
      }
    },

    html2js: {
      dist: {
        src: [ 'app/**/*.html' ],
        dest: 'tmp/templates.js'
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 
          'app/components/*.js',
          'app/directives/*.js', 
          'app/views/*.js', 
          'app/components/**/*.js', 
          'app/directives/**/*.js', 
          'app/views/**/*.js', 
          '!app/**/*_test.js', 
          'app/*.js', 
          'tmp/*.js' 
        ],
        dest: 'dist/app.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/app.js': [ 'dist/app.js' ]
        },
        options: {
          mangle: false
        }
      }
    },

    clean: {
      temp: {
        src: [ 'tmp' ]
      }
    },

    watch: {
      dev: {
        files: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js', 'app/**/**/*.html', '*.html', ],
        tasks: [ 'html2js:dist', 'concat:dist', 'clean:temp'],
        options: {
          atBegin: true
        }
      },
      min: {
        files: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js', 'app/**/**/*.html', '*.html' ],
        tasks: [ 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist' ],
        options: {
          atBegin: true
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },

    compress: {
      dist: {
        options: {
          archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [{
            src: [ 'app/index.html' ],
            dest: '/'
          }, {
          src: [ 'dist/**' ],
          dest: 'dist/'
        // }, {
        //   src: [ 'assets/**' ],
        //   dest: 'assets/'
        // }, {
        //   src: [ 'libs/**' ],
        //   dest: 'libs/'
        // }]
        }]
      }
    }
  });

  // Loading of tasks and registering tasks will be written here
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('dev', [ 'bower', 'connect:server', 'karma:unit', 'watch:dev' ]);
  grunt.registerTask('minified', [ 'bower', 'connect:server', 'karma:unit', 'watch:min' ]);
  grunt.registerTask('test', [ 'bower', 'karma:unit' ]);
  grunt.registerTask('continuoustest', [ 'bower', 'karma:continuous' ]);
  grunt.registerTask('package', [ 'bower', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist',
    'clean:temp', 'compress:dist' ]);
  grunt.registerTask('production', [ 'bower', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist',
    'clean:temp']);
};