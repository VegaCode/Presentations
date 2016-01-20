
// spec.js
var indexPage = require('./indexPage2');
var growl;

describe('NW App', function() {
  var page = new indexPage();

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.AppUrl('http://localhost:3000/#/main/625b');

  it("should show correct title and displays menu", function(){
    page.sendKeyBoard('ARROW_UP');
    expect(page.AppTitle()).toEqual('NW');
  });

  it('should go through slides', function(){
    page.AppSleep(1000);
    page.continueMoving({id: 'navright'});
  });

  // it('should open prompt for login password', function(){
  //   page.elementClick({id: 'cogSettings'});
  //   page.AppSleep(1000);
  //   page.switchToPopupString('admin123');
  //   page.AppSleep(1000);
  //   page.switchToPopup('accept');
  //   page.AppSleep(1000);
  // });
  //
  // it('should reset the whole project', function(){
  //   page.elementClick({id: 'resetProject'});
  //   page.switchToPopup('accept');
  //   page.AppSleep(1000);
  // });
  //
  // it('should go through slides', function(){
  //   page.continueMoving({id: 'navright'});
  // });
  //
  // it('should no longer display the settings for the admin by clicking the cog button', function(){
  //   page.elementClick({id: 'cogSettings'});
  //   page.AppSleep(1000);
  // });

  it('should start ranking Names and providing input information', function(){
    page.testNames();
  });

  it('should show the Summary Slide', function(){
    page.elementClick({id: 'goesToSummary'});
    page.AppSleep(1000);
  });

  it('should show retained names', function(){
    page.elementClick({id: 'showRetainedNames'});
    expect(page.AppDisplaysInformation({id: 'showRetainedNames'}, 'isPresent')).toBeTruthy();
    page.AppSleep(5000);
  });

  it('should show negative names', function(){
    page.elementClick({id: 'showNegativeNames'});
    expect(page.AppDisplaysInformation({id: 'showNegativeNames'}, 'isPresent')).toBeTruthy();
    page.AppSleep(5000);
  });

  it('should display new names', function(){
    page.elementClick({id: 'showNewNames'});
    expect(page.AppDisplaysInformation({id: 'showNewNames'}, 'isPresent')).toBeTruthy();
    page.AppSleep(5000);
  });

  it('should display roots to explore', function(){
    page.elementClick({id: 'showExploreRoots'});
    expect(page.AppDisplaysInformation({id: 'showExploreRoots'}, 'isPresent')).toBeTruthy();
    page.AppSleep(5000);
  });

  it('should input something in the comments for roots to explore', function(){
    page.sendStringToBox({id: 'exploreTextArea'}, 'Test Explore');
    // page.elementClick({id: 'saveExploreComments'});
    // page.switchToPopup('accept');
    // page.AppSleep(1000);
  });

  it('should display roots to avoid', function(){
    page.elementClick({id: 'showAvoidRoots'});
    expect(page.AppDisplaysInformation({id: 'showAvoidRoots'}, 'isPresent')).toBeTruthy();
    page.AppSleep(5000);
  });

  it('should input something in the comments for roots to avoid', function(){
    page.sendStringToBox({id: 'avoidTextArea'}, 'Test Avoid');
    // page.elementClick({id: 'saveAvoidComments'});
    // page.switchToPopup('accept');
    // page.AppSleep(1000);
  });
});
