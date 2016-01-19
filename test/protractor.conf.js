'use strict';

var request = require('request');
var reporters = require('jasmine-reporters');
var   simpleStringify = function(object){
      var simpleObject = {};
      for (var prop in object ){
          if (!object.hasOwnProperty(prop)){
              continue;
          }
          if (typeof(object[prop]) == 'object'){
              continue;
          }
          if (typeof(object[prop]) == 'function'){
              continue;
          }
          simpleObject[prop] = object[prop];
      }
      return JSON.stringify(simpleObject); // returns cleaned up JSON
  };
var report ,d = new Date(), datestring = ('0' + d.getDate()).slice(-2) + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' +
d.getFullYear()+ '-Time-' + ('0' + d.getHours()).slice(-2) + '-' + ('0' + d.getMinutes()).slice(-2);

exports.config = {
  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites:{
    basicTest: ['./e2e/**/index.spec.js'],
    // longerTest: ['./e2e/**/index2.spec.js'],
  },


   capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new reporters.JUnitXmlReporter({
        savePath:'target/text-reports/', consolidateAll:false})
      );
  }
};
