import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TrackerApp} from '../app/tracker';

beforeEachProviders(() => [TrackerApp]);

describe('App: Tracker', () => {
  it('should have the `defaultMeaning` as 42', inject([TrackerApp], (app: TrackerApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TrackerApp], (app: TrackerApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

