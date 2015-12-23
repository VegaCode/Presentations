// conf.js
var Jasmine2HTMLReporter = require('C:/Users/cacevedo/Documents/Visual Studio 2013/Projects/Angular/nw/node_modules/protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./e2e/**/*.spec.js'],

   capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HTMLReporter({
        savePath: 'target/screenshots', //this one creates the folder target and inside a folder screenshots
        takeScreenshotsOnlyOnFailures: true, //this will only take screenshots if there is any fail
        metadataBuilder: function(currentSpec, suites, browserCapabilities) {
          return { id: currentSpec.id, os: browserCapabilities.get('browserName') };
        }
    }));
  }
};
