import { Component, OnInit } from "@angular/core";
import { Product } from "./class/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  products: Array<Product> = [];

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.78, 1, "这是商品的描述，第一个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
      ]),
      new Product(2, "第二个商品", 2.78, 2, "这是商品的描述，第二个商品", [
        "硬件设备"
      ]),
      new Product(3, "第三个商品", 3.78, 3, "这是商品的描述，第三个商品", [
        "电子产品",
        "外设产品"
      ]),
      new Product(4, "第四个商品", 4.78, 4, "这是商品的描述，第四个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
      ]),
      new Product(5, "第五个商品", 5.78, 5, "这是商品的描述，第五个商品", [
        "硬件设备",
        "外设产品"
      ]),
      new Product(6, "第六个商品", 6.78, 3, "这是商品的描述，第六个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
      ])
    ];
  }
}
