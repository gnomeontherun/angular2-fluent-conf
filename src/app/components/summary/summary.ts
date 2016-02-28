import {Component} from 'angular2/core';
import {StockInterface} from '../../services/stocks/stocks';

@Component({
  selector: 'summary',
  inputs: ['stock'],
  templateUrl: 'app/components/summary/summary.html',
  styleUrls: ['app/components/summary/summary.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Summary {
  stock: StockInterface;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
}
