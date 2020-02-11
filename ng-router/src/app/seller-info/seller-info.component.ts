import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-seller-info",
  templateUrl: "./seller-info.component.html",
  styleUrls: ["./seller-info.component.css"]
})
export class SellerInfoComponent implements OnInit {
  sellerId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.sellerId = this.route.snapshot.params["id"];
    this.route.params.subscribe(
      (params: Params) => (this.sellerId = params["id"])
    );
  }
}
