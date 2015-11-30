// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9001/#/main/1012');
    browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
    
  var el = element(by.id('navright'));
  el.click();
  el.click();
  el.click();
    
    
    

   element(by.model('main.selectedName')).sendKeys('LOXARESC');
    // element(by.model('second')).sendKeys(2);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(10000);
    // element(by.id('gobutton')).click();
    expect(by.model('main.nameCandidate').toString()).toEqual('LOXARESC');
    expect(browser.getTitle()).toEqual('NW');
  });
});