// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  //  capabilities: {
  //   browserName: 'firefox',
  //   //browserName: 'chrome'
  // },
  onPrepare:function(){
  	browser.driver.manage().window().maximize();
  },
  suites:{
  	basics: 'specs.js',
  	fromSumarized: 'specs.js'
  }
  //  multiCapabilities: [{
  //   browserName: 'firefox'
  // }, { 
  //   browserName: 'chrome'
  // }]
}