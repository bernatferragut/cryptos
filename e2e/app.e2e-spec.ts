import { UserpostAppPage } from './app.po';

describe('userpost-app App', () => {
  let page: UserpostAppPage;

  beforeEach(() => {
    page = new UserpostAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
