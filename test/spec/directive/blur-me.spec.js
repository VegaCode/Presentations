
describe('Red-Me Directive, ', function() {
  var element;
  var $scope;
  beforeEach(module('nwApp'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div red-me>{{2+2}}</div>');
    $compile(element)($rootScope);
  }));

  it('it should be equal to 4', function() {
    $scope.$digest();
    expect(element.html()).toBe('4');
  });

  it('it should have class "color"', function () {
    expect(element.hasClass('color')).toBe(true);
  });

});
