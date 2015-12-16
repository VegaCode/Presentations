describe('MainCtrl, ', function() {
  var element;
  var controller;
  var $scope;
  var queryStringCheckNumber = '1012';
  beforeEach(module('nwApp'));
  beforeEach(inject(function(_$rootScope_, $controller) {
    $scope = _$rootScope_.$new();
    controller = $controller('MainCtrl', {$scope: $scope, queryStringCheck:queryStringCheckNumber});
    
    //SPIES use jasmin spies to access functions inhired by the controller with the shared scope
    $scope.newSpy = jasmine.createSpy();
  }));
  it('it should display greeting', function() {
    expect(controller.greeting === 'Hello World!').toBe(true);
  });
});
