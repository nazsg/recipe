import { AnotherAppPage } from './app.po';

describe('another-app App', () => {
  let page: AnotherAppPage;

  beforeEach(() => {
    page = new AnotherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
