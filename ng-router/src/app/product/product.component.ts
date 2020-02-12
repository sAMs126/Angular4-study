import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  productId: number;

  productName: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // 1. 在查询参数中传参
    // -> snapshot 参数快照
    // this.productId = this.route.snapshot.queryParams["id"];

    // 2. 在路由路径中传参
    // -> snapshot 参数快照
    // this.productId = this.route.snapshot.params["id"];
    // -> subscribe() 参数订阅
    // this.route.params.subscribe(
    //   (params: Params) => (this.productId = params["id"])
    // );

    // 预先从 Resolve 中获取数据
    this.route.data.subscribe((data: { product: Product }) => {

      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

  toSellerPage() {
    this.router.navigate(["./seller", 66], { relativeTo: this.route });
  }
}

export class Product {
  constructor(public id: number, public name: string) {}
}
