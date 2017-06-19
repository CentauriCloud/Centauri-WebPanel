import { CentauriWebPanelPage } from './app.po';

describe('centauri-web-panel App', () => {
  let page: CentauriWebPanelPage;

  beforeEach(() => {
    page = new CentauriWebPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
