'use strict'
describe('MainCtrl, ', function() {
  var controller;
  var $scope;
  var queryStringCheckNumber = '1012';
  beforeEach(module('nwApp'));
  beforeEach(inject(function(_$rootScope_, $controller) {
    $scope = _$rootScope_.$new();

    controller = $controller('MainCtrl', {$scope: $scope,queryStringCheck:queryStringCheckNumber});


  }));

  it('it should display greeting', function() {
    controller.greeting === 'Hello World!';
    expect(controller.greeting === 'Hello World!').toBe(true);


  });


          // var centerTestNames = function(nameCandidate) {
          //        // CA- added function above to make sure if it is katakana or not when billboard or subwaystop is displayed
          //                 self.testNameWidth= '85';
          //             if(_TemplateName === 'Billboard' ||_TemplateName ==='SubwayStop'){
          //                     self.textAttribute = 'left';
          //
          //         // ************************ Column Off Set *************************************
          //                    switch (nameCandidate.length) {
          //                         case 3:
          //                         case 4:
          //                           self.columnOffSet = '5';
          //                           break;
          //                         case 5:
          //                         case 6:
          //                             self.columnOffSet = '4';
          //                             break;
          //                         case 7:
          //                         case 8:
          //                         case 9:
          //                             self.columnOffSet = '3';
          //                             break;
          //                         case 10:
          //                             self.columnOffSet = '2';
          //                             break;
          //                         default:
          //                             break;
          //                     }
          //         // ************************ Margin Left of TestName ****************************
          //                     switch (nameCandidate.length) {
          //                         case 3:
          //                         case 5:
          //                             self.marginLeftTestName = '90';
          //                             break;
          //                         case 4:
          //                             self.marginLeftTestName = '120';
          //                             break;
          //                         case 6:
          //                             self.marginLeftTestName = '145';
          //                             break;
          //                         case 7:
          //                             self.marginLeftTestName = '60';
          //                             break;
          //                         case 8:
          //                             self.marginLeftTestName = '110';
          //                             break;
          //                         case 9:
          //                             self.marginLeftTestName = '150';
          //                             break;
          //                         case 10:
          //                             self.marginLeftTestName = '100';
          //                             break;
          //                         default:
          //                             break;
          //                     }
          //         // ************************ Margin Left of Image *******************************
          //                     switch (nameCandidate.length) {
          //                         case 3:
          //                         case 5:
          //                             self.marginLeftImage = '140';
          //                             break;
          //                         case 4:
          //                             self.marginLeftImage = '180';
          //                             break;
          //                         case 6:
          //                             self.marginLeftImage = '200';
          //                             break;
          //                         case 7:
          //                             self.marginLeftImage = '120';
          //                             break;
          //                         case 8:
          //                             self.marginLeftImage = '170';
          //                             break;
          //                         case 9:
          //                             self.marginLeftImage = '210';
          //                             break;
          //                         case 10:
          //                             self.marginLeftImage = '160';
          //                             break;
          //                         default:
          //                             break;
          //                     }
          //
          //                 }else{
          //                       self.columnSet = '12';
          //                       self.columnOffSet = '0';
          //                       self.marginLeftImage = '0';
          //                        self.marginLeftTestName = '0';
          //                       self.columnNameCandSet= '12';
          //                       self.textAttribute = 'center';
          //                 }
          //
          //            };


});
