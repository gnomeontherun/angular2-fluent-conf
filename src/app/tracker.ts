import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Stocks} from './services/stocks/stocks';

@Component({
  selector: 'tracker-app',
  providers: [Stocks],
  templateUrl: 'app/tracker.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class TrackerApp {

  constructor(service: Stocks) {
    service.load().subscribe(stocks => {
      console.log(stocks.json());
    });
  }
}
