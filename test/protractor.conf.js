// conf.js
var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');

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
  new HtmlScreenshotReporter({
    dest: '../test/screenshots',
    filename: 'my-report.html'
  })
);
  }
  //  multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }]
};
