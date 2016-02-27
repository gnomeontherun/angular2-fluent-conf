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
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Manage} from './manage';
import {Stocks} from '../../services/stocks/stocks';

describe('Manage Component', () => {

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

  it('should load', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(Manage).then((fixture) => {
      let component = fixture.debugElement.componentInstance;
      fixture.detectChanges();

      expect(component.symbols.length).toEqual(5);
      expect(!!component.service).toEqual(true);
    });
  }));

});
