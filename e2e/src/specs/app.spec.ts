import { AppPage } from '../page-objects/app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    expect(await page.getTitleText()).toEqual('angular app is running!');
  });
});
