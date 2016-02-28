import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common';
import {Stocks} from '../../services/stocks/stocks';

@Component({
  selector: 'manage',
  templateUrl: 'app/components/manage/manage.html',
  styleUrls: ['app/components/manage/manage.css'],
  providers: [FORM_PROVIDERS, Stocks],
  directives: [FORM_DIRECTIVES],
  pipes: []
})
export class Manage {
  symbols: Array<string>;
  service: Stocks;
  stockForm: ControlGroup;

  constructor(service: Stocks, builder: FormBuilder) {
    this.service = service;
    this.symbols = service.get();

    this.stockForm = builder.group({
      stock: ['']
    });
  }

  add() {
    this.symbols = this.service.add(this.stockForm.value.stock.toUpperCase());
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
}
