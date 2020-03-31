import { Component, OnInit } from "@angular/core";
import { Product } from "../service/class/product";
import { ProductService } from "app/service/product.service";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
    constructor (private productService: ProductService) { }

    products: Array<Product> = [];

    ngOnInit() {
        this.products = this.productService.getProducts();
    }
}
