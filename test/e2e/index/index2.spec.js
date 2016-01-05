// spec.js
var indexPage = require('./indexPage2');
var growl;

describe('Protractor Demo App', function() {
  var page = new indexPage();

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.AppUrl('http://localhost:9001/#/main/1013');

<<<<<<< HEAD
=======
  it("should show correct title and displays menu", function(){
    page.sendKeyBoard('ARROW_UP');
    expect(page.AppTitle()).toEqual('NW');
  });

  it('should go to home or be at home', function(){
    page.elementClick({id: 'goHome'});
  });

>>>>>>> af26f07747a5df7428cd09dd3871d13d192bf018
  it('should input a name in Search Bar and go to slide of the name', function(){
    page.sendStringToBox({model: 'main.selectedName'}, 'APTIERA');
    page.sendKeyBoard('ENTER');
    expect(page.obtainText({binding: 'main.nameCandidate'})).toBe('APTIERA');
  });

  it('should reset the slide and then change the rank', function(){
    page.elementClick({id: 'resetSlide'});
    page.elementClick({id: 'positiveRank'});
  });

  it('should display Tally', function(){
    page.elementClick({id: 'buttonTally'});
    expect(page.AppDisplaysInformation({id: 'buttonTally'}, 'isDisplayed')).toBe(true);
  });

  it('should go to summary slide', function(){
    page.elementClick({id: 'goesToSummary'});
  });

});
