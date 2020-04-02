import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stock-child',
  templateUrl: './stock-child.component.html',
  styleUrls: ['./stock-child.component.css']
})
export class StockChildComponent implements OnInit {

  stockCode: string = "IBM";

  price: number;

  @Output("priceChange")
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  constructor () {
    setInterval(() => {
      let priceQuote: PriceQuote =
        new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000)
  }

  ngOnInit() {
  }

}

export class PriceQuote {
  constructor (
    public stockCode: string,
    public lastPrice: number) {

  }
}
