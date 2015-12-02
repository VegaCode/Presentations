'use strict';

describe('Controller: MainCtrl', function () {

    var mockMainCtrl;

  // load the controller's module
  beforeEach(module('nwApp'));
  beforeEach(module('jquery'));
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_) {
    mockMainCtrl = _$controller_('MainCtrl');
  }));

  // describe('testing function from nwApp', function(){
  //   expect(MainCtrl.displaySettings).toBe(false);
  // }).
  // beforeEach(inject(function($window, queryStringCheck){
  //   mockWindow=$window;
  //   mockqueryStringCheck=queryStringCheck;
  // }));

  it('says hello world!', function () {
  expect("Hello world!").toEqual("Hello world!");
  });

});
