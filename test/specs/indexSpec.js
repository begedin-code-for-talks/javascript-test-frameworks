import assert from 'assert';

describe('page title', () => {
  it('has the correct value', () => {
    let title =  browser.url('/').getTitle();
    assert.equal(title, 'Weblica 2016');
  });

  it('has the expected interactive elements', () => {
    let page = browser.url('/');
    assert.equal(page.elements('input#first').value.length, 1);
    assert.equal(page.elements('input#second').value.length, 1);
    assert.equal(page.elements('button#add').value.length, 1);
    assert.equal(page.elements('span#result').value.length, 1);
  });

  it('works', () => {
    let page = browser.url('/');

    page.setValue('input#first', 2);
    page.setValue('input#second', 3);
    page.click('button#add');

    assert.equal(page.getText('span#result'), '5');
  });

  xit('skips a spec', () => {});
});
