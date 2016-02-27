import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Summary} from './summary';

describe('Summary Component', () => {

  beforeEachProviders((): any[] => []);

  it('should detect if positive or negative', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(Summary).then((fixture) => {
      let component = fixture.debugElement.componentInstance;
      // Test isNegative
      component.stock = {
        symbol: 'abc',
        lastTradePriceOnly: 10,
        change: -1,
        changeInPercent: 0.1
      };
      fixture.detectChanges();
      expect(component.isNegative()).toBe(true);
      expect(component.isPositive()).toBe(false);
      // Test isPositive
      component.stock.change = 1;
      fixture.detectChanges();
      expect(component.isNegative()).toBe(false);
      expect(component.isPositive()).toBe(true);
    });
  }));

});
