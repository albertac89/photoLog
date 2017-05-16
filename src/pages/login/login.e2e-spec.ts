import { browser, element, by } from 'protractor';

describe('Login page', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('Should have a Welcome title', () => {
    expect(element(by.tagName('h3')).getAttribute('innerHTML')).toContain('Welcome');
  });

  it('Should have an input username', () => {
    expect(element(by.css('input[formcontrolname=username]')).isPresent());
  });

  it('Should have an input password', () => {
    expect(element(by.css('input[formcontrolname=password]')).isPresent());
  });

  it('Should have a label username', () => {
    expect(element(by.id('username')).getAttribute('innerHTML')).toContain('Username');
  });

  it('Should have a label password', () => {
    expect(element(by.id('password')).getAttribute('innerHTML')).toContain('Password');
  });

  it('Should have a submit button', () => {
    expect(element(by.css('button[type=submit] [disabled]')).isPresent());
  });

  it('The user can login', () => {
    let username = 'Pepin';
    let password = '123456';

    element(by.css('input[formcontrolname=username]')).sendKeys(username);
    browser.driver.sleep(1000);
    expect(element(by.tagName('h3')).getAttribute('innerHTML')).toContain('Welcome ' + username);
    element(by.css('input[formcontrolname=password]')).sendKeys(password);
    browser.driver.sleep(1000);
    element(by.css('button[type=submit]')).click().then(() => {
      // Wait for the page transition
      browser.driver.sleep(2500);
      expect(element(by.id('homeTitle')).getAttribute('innerHTML')).toContain('Home');
    });
  });

});
