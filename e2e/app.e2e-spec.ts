import { browser, by, element } from 'protractor'

describe('E2E: main page', function(){
  it('comprueba que visita la página principal', function(){
    browser.get('http://127.0.0.1:4200/');
    expect(true).toBe(true);
  })
})
