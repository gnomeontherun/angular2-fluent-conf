export class TrackerPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Tracker-app p')).getText(); }
}
