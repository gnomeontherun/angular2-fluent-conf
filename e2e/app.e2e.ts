/// <reference path="../typings/main.d.ts" />

import { TrackerPage } from './app.po';

describe('tracker App', function() {
  let page: TrackerPage;

  beforeEach(() => {
    page = new TrackerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('tracker Works!');
  });
});
