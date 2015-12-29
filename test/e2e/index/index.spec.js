"use strict";// spec.js;
var indexPage = require('./indexPage');
describe('Protractor Demo App', function() {
  var page = new indexPage();

 //  if (jasmine.version) { //the case for version 2.0.0
 //    console.log('jasmine-version:' + jasmine.version);
 // }
 // else { //the case for version 1.3
 //    console.log('jasmine-version:' + jasmine.getEnv().versionString());
 // }

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.get('http://localhost:9001/#/main/1013');

  // it("it should welcome the tester to the testing unit", function(){
  //   page.clickButtonGrowlTriggerWelcome();
  //   page.sleep(4000);
  // });

  it("it should show correct title and displays menu", function(){
    page.pressKeyArrowUp();
    expect(page.getTitle()).toEqual('NW2');
  });

  it('it should go to summary slide', function(){
    page.clickButtonGoToSummary();
    page.sleep(2000);
  });

  // it('it should go through slides', function(){
  //   page.continueMoving();
  // });
  //
  // it('it should open prompt for login password', function(){
  //   page.switchToAlert('admin123');
  //   page.sleep(3000);
  // });
  //
  // it('it should display: we are going to reset project in about 3 seconds', function(){
  //   page.sleep(3000);
  //   page.clickButtonGrowlTriggerResetProject();
  // });
  //
  // it('it should reset the whole project', function(){
  //   page.clickButtonResetProject();
  //   page.alertAccept();
  //   page.sleep(3000);
  // });
  //
  // it('it should go through slides', function(){
  //   page.continueMoving();
  // });
  //
  // it('it should no longer display the settings for the admin by clicking the cog button', function(){
  //   page.sleep(3000);
  //   page.clickButtonAdminLogin();
  //   page.sleep(2000);
  // });
  // it('it should display notification of what we are doing in name testing', function(){
  //   page.clickButtonGrowlTrigger();
  // });
  //
  // it('it should start ranking Names and providing input information', function(){
  //   page.testNames();
  // });
  //
  // it('it should start displaying information in the Summary Slide', function(){
  //   page.clickButtonGrowlTriggerSummary();
  //   page.sleep(2000);
  // });

  it('it should show retained names', function(){
    page.clickDisplayRetainedNames();
    expect(page.retainedNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });

  it('it should show negative names', function(){
    page.clickDisplayNegativeNames();
    expect(page.negativeNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });

  it('it should display new names', function(){
    page.clickDisplayNewNames();
    expect(page.newNamesAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });
  it('it should display roots to explore', function(){
    page.clickDisplayExploreRoots();
    expect(page.exploreRootsAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });
  it('it should input something in the comments for roots to explore', function(){
    page.sendKeysOfCommentExplore('Protractor Test Explore');
    // expet()
    page.clickSaveExploreComments();
    page.alertAccept();
    page.sleep(2000);
  });
  it('it should display roots to avoid', function(){
    page.clickDisplayAvoidRoots();
    expect(page.avoidRootsAreDisplayed()).toBeTruthy();
    page.sleep(2000);
  });
  it('it should input something in the comments for roots to avoid', function(){
    page.sendKeysOfCommentAvoid('Protractor Test Avoid');
    // expet()
    page.clickSaveAvoidComments();
    page.alertAccept();
    page.sleep(2000);
  });

  // it('it should display information of the TypeAhead functionality', function(){
  //   page.clickButtonGrowlTriggerTypeAhead();
  //   page.sleep(2000);
  // });
  it('it should input a name in Search Bar and go to slide of the name', function(){
    page.sendKeysOfSelectedName('APTIERA');
    page.pressKeyEnter();
    expect(page.getTextOfSelectedName()).toBe('APTIERA');
    page.sleep(2000);
  });

  it('it should reset the slide and then change the rank', function(){
    page.clickButtonResetSlide();
    page.clickRadioButtonPositive();
  });

  it('it should display Tally', function(){
    page.sleep(2000);
    page.clickButtonTally();
    expect(page.tallyIsDisplayed()).toBe(true);
  });

  it('it should go to summary slide', function(){
    // page.clickButtonGrowlTriggerGoToSummary();
    // page.sleep(6000);
    page.clickButtonGoToSummary();
    page.sleep(2000);
  });

});
