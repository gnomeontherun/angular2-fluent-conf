import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StockInterface} from './services/stocks/stocks';
import {Dashboard} from './components/dashboard/dashboard';
import {Manage} from './components/manage/manage';

@Component({
  selector: 'tracker-app',
  providers: [],
  templateUrl: 'app/tracker.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: Dashboard},
  {path: '/manage', name: 'Manage', component: Manage}
])
export class TrackerApp {

}
