// conf.js
var Jasmine2HTMLReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites:{
    basicTest: ['./e2e/**/index.spec.js'],
    longerTest: ['./e2e/**/index2.spec.js'],
  },


   capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HTMLReporter({
        savePath: 'target/screenshots', //this one creates the folder target and inside a folder screenshots
        metadataBuilder: function(currentSpec, suites, browserCapabilities) {
          return { id: currentSpec.id, os: browserCapabilities.get('browserName') };
        },
        filename: 'my-report.html',
        reportTitle: "Report Title"
    }));
  }
};
