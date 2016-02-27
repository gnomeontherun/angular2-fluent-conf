import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {BaseRequestOptions, XHRBackend, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

import {Stocks} from './stocks';

describe('Stocks', () => {
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    provide(XHRBackend, {useClass: MockBackend}),
    Stocks
  ]);

  it('should have http', inject([ Stocks ], (service) => {
    expect(!!service.http).toEqual(true);
  }));

  it('should get the stocks', inject([ Stocks ], (service) => {
    expect(service.get().length).toEqual(5);
  }));

  it('should add a stock', inject([ Stocks ], (service) => {
    var num = service.get().length;
    expect(service.add('a').length).toEqual(num + 1);
  }));

  it('should remove a stock', inject([ Stocks ], (service) => {
    var num = service.get().length;
    expect(service.remove('a').length).toEqual(num - 1);
  }));

  it('should get quotes', inject([XHRBackend, Stocks], (mockBackend, service) => {

    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: [
                {
                  symbol: 'fb',
                  lastTradePriceOnly: 10,
                  change: 1,
                  changeInPercent: 0.1
                }]
            }
          )));
      });

    service.load(['fb']).subscribe((stocks) => {
      console.log(stocks)
      expect(stocks.length).toBe(1);
      expect(stocks[0].symbol).toBe('fb');
    });

  }));

});
