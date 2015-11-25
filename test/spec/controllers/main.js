'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('nwApp'));

  var MainCtrl,
    scope,greeting,mockqueryStringCheck;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    MainCtrl = $controller('MainCtrl', function(){
      this.queryStringCheck: jasmine.createSpy('queryStringCheck');
      this.greeting = jasmine.createSpy('greeting');
    });
  }));

  beforeEach(inject(function($window, queryStringCheck){
  mockWindow=$window;
  mockqueryStringCheck=queryStringCheck;
}));

it('says hello world!', function () {
expect(this.greeting).toEqual("Hello world!");
});

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
