import {bootstrap} from 'angular2/platform/browser';
import {TrackerApp} from './app/tracker';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(TrackerApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
