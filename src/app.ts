import {bootstrap} from 'angular2/platform/browser';
import {TrackerApp} from './app/tracker';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(TrackerApp, [
  ROUTER_PROVIDERS
]);
