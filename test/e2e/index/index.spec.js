// spec.js
var indexPage = require('./indexPage');

describe('Protractor Demo App', function() {
  var page = new indexPage();
  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.get('http://localhost:9001/#/main/1013');

  it("should show correct title and displays menu", function(){
    page.pressKeyArrowUp();
    expect(page.getTitle()).toEqual('NW');
  });

  it('should go through slides', function(){
    page.continueMoving();
  });

  it('should open prompt for login password', function(){
    page.switchToAlert('admin123');
    page.sleep(8000);
  });

  it('should reset the whole project', function(){
    page.sleep(3000);
    page.clickButtonResetProject();
    page.alertAccept();
  });

  it('should go home if reseting project does not go home', function(){
    page.clickButtonGoHome();
    page.alertAccept();
  });

  it('should go through slides', function(){
    page.continueMoving();
  });

  it('should no longer display the settings for the admin by clicking the cog button', function(){
    page.sleep(3000);
    page.clickButtonAdminLogin();
    page.sleep(2000);
  });

  it('should start ranking Names and providing input information', function(){
    page.testNames();
  });

  it('should show retained names', function(){
    page.clickDisplayRetainedNames();
    expect(page.retainedNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });

  it('should show Retained names', function(){
    page.stackedProgressBarClick();
    page.sleep(8000);
  });

  it('should show negative names', function(){
    page.clickDisplayNegativeNames();
    expect(page.negativeNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });

  it('should display new names', function(){
    page.clickDisplayNewNames();
    expect(page.newNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });
  it('should display roots to explore', function(){
    page.clickDisplayExploreRoots();
    expect(page.exploreRootsAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });
  it('should display roots to avoid', function(){
    page.clickDisplayAvoidRoots();
    expect(page.avoidRootsAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });

  it('should input a name in Search Bar and go to slide of the name', function(){
    page.sendKeysOfSelectedName('APTIERA');
    page.pressKeyEnter();
    expect(page.getTextOfSelectedName()).toBe('APTIERA');
    page.sleep(2000);
  });

  it('should reset the slide and then change the rank', function(){
    page.clickButtonResetSlide();
    page.clickRadioButtonPositive();
  });

  it('should display Tally', function(){
    page.sleep(2000);
    page.clickButtonTally();
    expect(page.tallyIsDisplayed()).toBe(true);
  });

  it('should go to summary slide', function(){
    page.clickButtonGoToSummary();
    page.clickButtonGoToSummary();
    page.sleep(2000);
  });

});
