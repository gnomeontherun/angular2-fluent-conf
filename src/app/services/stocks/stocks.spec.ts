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
import {Stocks} from './stocks';


describe('Stocks Service', () => {

  beforeEachProviders(() => [Stocks]);


  it('should ...', inject([Stocks], (service:Stocks) => {

  }));

});
