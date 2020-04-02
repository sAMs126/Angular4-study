import { Component, OnInit } from '@angular/core';
import { PriceQuote } from '../stock-child/stock-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  stock: string = "";

  priceQuote: PriceQuote = new PriceQuote("", 0);

  constructor () { }

  ngOnInit() {
  }

  priceQuoteHandle(event: PriceQuote) {
    this.priceQuote = event;
  }

}
