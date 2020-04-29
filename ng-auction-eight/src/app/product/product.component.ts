import { Component, OnInit } from "@angular/core";
import { Product } from "../service/class/product";
import { ProductService } from "app/service/product.service";
import { FormControl } from "@angular/forms";
import "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];

  keyword: string;

  titleFilter: FormControl = new FormControl();

  constructor (private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
