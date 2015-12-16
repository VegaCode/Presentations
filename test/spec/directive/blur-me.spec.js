
describe('Blur-me directive, ', function() {
  var element;
  var $scope;
  beforeEach(module('nwApp'))
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div>{{2+2}}</div>');
    $compile(element)($rootScope)
  }));

  it('it should be equal to 4', function() {
    $scope.$digest();
    expect(element.html()).toBe('4');
  });
});
