// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./e2e/**/*.spec.js'],
   capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
  }
  //  multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }]
}
