import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/shared/product.service";
import { Product } from "app/class/product";

@Component({
    selector: "app-product-one",
    templateUrl: "./product-one.component.html",
    styleUrls: ["./product-one.component.css"]
})
export class ProductOneComponent implements OnInit {
    product: Product;

    constructor(private productService: ProductService) {
        this.product = productService.getProduct();
    }

    ngOnInit() { }
}
