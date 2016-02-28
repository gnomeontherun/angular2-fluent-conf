import {Component} from 'angular2/core';
import {Summary} from '../summary/summary';
import {Stocks, StockInterface} from '../../services/stocks/stocks';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  providers: [Stocks],
  directives: [Summary],
  pipes: []
})
export class Dashboard {
  stocks: Array<StockInterface>;

  constructor(service: Stocks) {
    service.load().subscribe(stocks => this.stocks = stocks.json());
  }
}
