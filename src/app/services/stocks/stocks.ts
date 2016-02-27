import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];

@Injectable()
export class Stocks {
  private service: string = 'https://angular2-in-action-api.herokuapp.com';
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  get() {
    return stocks.slice(0);
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load() {
    return this.http.get(this.service + '/stocks/snapshot?symbols=' + stocks.join());
  }
}
