'use strict'
describe('MainCtrl, ', function() {
  var controller;
  var $scope;
  var Reveal= function addEventListener(e) {

  };
  var queryStringCheckNumber = '1012';
  beforeEach(module('nwApp'));
  beforeEach(inject(function(_$rootScope_, $controller) {
    $scope = _$rootScope_.$new();

    controller = $controller('MainCtrl', {$scope: $scope, Reveal:Reveal, queryStringCheck:queryStringCheckNumber});


  }));

  it('it should display greeting', function() {
    controller.greeting === 't!';
    expect(controller.greeting === 'Hello World!').toBe(true);


  });

});
