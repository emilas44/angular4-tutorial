import { Traversy2Page } from './app.po';

describe('traversy2 App', () => {
  let page: Traversy2Page;

  beforeEach(() => {
    page = new Traversy2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
