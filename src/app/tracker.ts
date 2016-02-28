import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StockInterface} from './services/stocks/stocks';
import {Summary} from './components/summary/summary';

@Component({
  selector: 'tracker-app',
  providers: [],
  templateUrl: 'app/tracker.html',
  directives: [ROUTER_DIRECTIVES, Summary],
  pipes: []
})
@RouteConfig([

])
export class TrackerApp {
  stock: StockInterface

  constructor() {
    this.stock = {
      symbol: 'goog',
      lastTradePriceOnly: 500,
      change: 5,
      changeInPercent: 0.01
    };
  }
}
