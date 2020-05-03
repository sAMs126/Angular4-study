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

  newRating: number = 5;

  newComment: string = "";

  isCommentHidden: boolean = true;

  constructor (private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.route.snapshot.params["productId"];
    this.getInfo(productId);
  }

  getInfo = (productId: number) => {
    this.productService.getProduct(productId)
      .subscribe((data) => {
        this.product = data
      });
    this.productService.getCommentsForProduct(productId)
      .subscribe((data) => {
        this.comments = data
      });
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), this.newRating, this.newComment, "somone");
    this.comments.unshift(comment);

    // 计算总星级
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    let sum: number = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    // 重置表单
    this.newRating = 5;
    this.newComment = null;
    this.isCommentHidden = true;
  }
}
