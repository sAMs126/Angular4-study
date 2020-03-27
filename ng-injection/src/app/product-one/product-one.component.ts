import { Component, Injector, OnInit } from "@angular/core";
import { Product } from "app/class/product";
import { ProductService } from "app/shared/product.service";

@Component({
    selector: "app-product-one",
    templateUrl: "./product-one.component.html",
    styleUrls: ["./product-one.component.css"]
})
export class ProductOneComponent implements OnInit {
    product: Product;

    // 手动注入
    private productService: ProductService
    // // // // // 强烈不建议使用此种形式 // // // // // 
    constructor (private injector: Injector) {
        this.productService = injector.get(ProductService);
    }

    ngOnInit() {
        this.product = this.productService.getProduct();
    }
}
