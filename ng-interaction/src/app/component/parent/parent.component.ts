import { Component, OnInit } from '@angular/core';
import { PriceQuote } from '../stock-child/stock-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  stock: string = "";

  priceQuoteShow: PriceQuote = new PriceQuote("", 0);

  priceQuoteOrder: PriceQuote = new PriceQuote("", 0);

  constructor () { }

  ngOnInit() {
  }

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuoteShow = event;
  }

  buyHandler(event: PriceQuote) {
    this.priceQuoteOrder = event;
  }
}
