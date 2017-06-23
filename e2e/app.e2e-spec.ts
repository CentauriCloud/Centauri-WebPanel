import { CentauriWebpanelPage } from './app.po';

describe('centauri-webpanel App', () => {
  let page: CentauriWebpanelPage;

  beforeEach(() => {
    page = new CentauriWebpanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
