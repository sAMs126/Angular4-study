import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../stock-child/stock-child.component';

@Component({
  selector: 'app-order-child',
  templateUrl: './order-child.component.html',
  styleUrls: ['./order-child.component.css']
})
export class OrderChildComponent implements OnInit {

  @Input()
  priceQuote: PriceQuote = new PriceQuote("", 0);

  constructor() { }

  ngOnInit() {
  }

}
