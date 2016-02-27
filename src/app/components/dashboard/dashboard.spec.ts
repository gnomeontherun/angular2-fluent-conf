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
import {BaseRequestOptions, Http, XHRBackend, RequestMethod, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Dashboard} from './dashboard';
import {Stocks} from '../../services/stocks/stocks';

describe('Dashboard Component', () => {

  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    Stocks
  ]);

  it('should load', injectAsync([TestComponentBuilder, MockBackend], (tcb, backend) => {
    return tcb.createAsync(Dashboard).then((fixture) => {
      let component = fixture.debugElement.componentInstance;

      expect(component.symbols.length).toEqual(5);
    });
  }));

});
