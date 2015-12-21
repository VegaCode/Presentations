// Karma configuration
// Generated on Tue Dec 15 2015 14:50:51 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'C:/Users/cvega/Desktop/Cesar Settings/SampleProjects/NWGit/nw/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    'bower_components/angular/angular.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/reveal-js/js/reveal.js',
    'bower_components/reveal-js/js/rvealLatest.js',
    'bower_components/reveal.js-master/js/reveal.js',
    'bower_components/reveal-js/lib/js/head.min.js',
    'bower_components/reveal-js/lib/js/html5shiv.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-bootstrap/ui-bootstrap.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/alertifyjs/alertify.js',
    'bower_components/angular-hotkeys/build/hotkeys.js',
    'bower_components/angular-local-storage/dist/angular-local-storage.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-screenfull/dist/angular-screenfull.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/auto-font-size/dist/auto_font_size.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/screenfull/dist/screenfull.js',
    'bower_components/angular-growl-v2/build/angular-growl.js',
    'app/scripts/app.js',
    'app/scripts/**/*.js',
    'test/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/app/js/*/*.js' : 'coverage',
      '**/app/js/modules/*/*.js' : 'coverage',
      '**/app/js/services/*/*.js' : 'coverage'
    },

    hostname:'localhost',
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
