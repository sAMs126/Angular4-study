import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/service/product.service";
import "rxjs";
import { Observable } from "rxjs";
import { Product } from "../service/class/product";
import { Search } from "app/service/class/search";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor (private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // 订阅中间人的流，订阅搜索时间
    this.productService.searchEvent.subscribe((search: Search) => {
      this.products = this.productService.searchProducts(search);
    });
  }
}
