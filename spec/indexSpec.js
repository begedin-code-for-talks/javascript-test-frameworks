describe('index', function() {
  beforeEach(() => {
    return browser.ignoreSynchronization = true;
  });

  it('should add two numbers', function() {
    browser.get('http://localhost:8080');

    element(by.id('first')).sendKeys('2');
    element(by.id('second')).sendKeys('3');
    element(by.id('add')).click();

    expect(element(by.id('result')).getText()).toEqual('5');
  });

  it('should not care about order of operations', function() {
    browser.get('http://localhost:8080');

    element(by.id('first')).sendKeys('3');
    element(by.id('second')).sendKeys('2');
    element(by.id('add')).click();

    var firstResult = element(by.id('result')).getText();

    browser.get('http://localhost:8080');

    element(by.id('first')).sendKeys('2');
    element(by.id('second')).sendKeys('3');
    element(by.id('add')).click();

    var secondResult = element(by.id('result')).getText();

    expect(firstResult).toEqual(secondResult);
  });

  it('should add two negative numbers', function() {
    browser.get('http://localhost:8080');

    element(by.id('first')).sendKeys('-2');
    element(by.id('second')).sendKeys('-3');
    element(by.id('add')).click();

    expect(element(by.id('result')).getText()).toEqual('-5');
  });

  it('should result in NaN when no input', function() {
    browser.get('http://localhost:8080');

    element(by.id('add')).click();

    expect(element(by.id('result')).getText()).toEqual('NaN');
  });
});
