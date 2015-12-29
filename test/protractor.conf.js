// conf.js
var request = require('request');
var Jasmine2HTMLReporter = require('protractor-jasmine2-screenshot-reporter');
var  webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
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
    longerTest: ['./e2e/**/index2.spec.js'],
  },


   capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    report = new Jasmine2HTMLReporter({
              dest: 'target/screenshots_'+ datestring, //this one creates the folder target and inside a folder screenshots
              filename: 'jasmineReport.html',
              metadataBuilder: function(currentSpec, suites, browserCapabilities)
              {
                var jar = request.jar();
                var req = request.defaults({
                  jar: jar
                });

                var apiCall = 'api/NW_NamesAndSlides?projectId=';
                webBaseUrl = 'http://localhost:64378/';
                req.get(webBaseUrl + apiCall+ '1012', function(result) {
                               console.log('result api call : ' + result);
                           });

               console.log('currentSpec: '+ simpleStringify(currentSpec));
               console.log('suites: '+ simpleStringify(suites));
               console.log('browserCapabilities string: '+ JSON.stringify(browserCapabilities));
               return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
               //return { id: currentSpec.id, os: browserCapabilities.get('browserName') };
              }
              });
    jasmine.getEnv().addReporter(report);
  }
};
