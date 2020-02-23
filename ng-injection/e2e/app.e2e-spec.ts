import { NgInjectionPage } from './app.po';

describe('ng-injection App', () => {
  let page: NgInjectionPage;

  beforeEach(() => {
    page = new NgInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
