import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StockInterface} from './services/stocks/stocks';
import {Dashboard} from './components/dashboard/dashboard';

@Component({
  selector: 'tracker-app',
  providers: [],
  templateUrl: 'app/tracker.html',
  directives: [ROUTER_DIRECTIVES, Dashboard],
  pipes: []
})
@RouteConfig([

])
export class TrackerApp {

}
