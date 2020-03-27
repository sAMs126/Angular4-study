import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "app/service/class/product";
import { ProductService } from "app/service/product.service";
import { Comment } from "app/service/class/comment";

@Component({
    selector: "app-product-detail",
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    comments: Comment[];

    constructor (private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit() {
        let productId: number = this.route.snapshot.params["productId"];
        this.product = this.productService.getProduct(productId);
        this.comments = this.productService.getCommentsForProduct(productId);
    }
}
