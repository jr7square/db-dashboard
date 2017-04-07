import { DbDashboardPage } from './app.po';

describe('db-dashboard App', () => {
  let page: DbDashboardPage;

  beforeEach(() => {
    page = new DbDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
