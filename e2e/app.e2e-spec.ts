import { AngularStorePage } from './app.po';

describe('angular-store App', function() {
  let page: AngularStorePage;

  beforeEach(() => {
    page = new AngularStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
