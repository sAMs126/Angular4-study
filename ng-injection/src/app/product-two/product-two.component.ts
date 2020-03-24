import { Component, OnInit } from "@angular/core";
import { Product } from "app/class/product";
import { ProductService } from "app/shared/product.service";
import { AnotherProductService } from "app/shared/another-product.service";

@Component({
    selector: "app-product-two",
    templateUrl: "./product-two.component.html",
    styleUrls: ["./product-two.component.css"],
    // 指明所使用的的提供器
    providers: [
        { provide: ProductService, useClass: AnotherProductService }
    ]
})
export class ProductTwoComponent implements OnInit {
    product: Product;

    constructor (private productService: ProductService) {
        this.product = productService.getProduct();
    }

    ngOnInit() { }
}
