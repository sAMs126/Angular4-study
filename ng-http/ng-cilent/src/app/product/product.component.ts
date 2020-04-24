import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Http } from "@angular/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  dataSource: Observable<any>;

  products: Array<any> = [];

  constructor (private http: HttpClient) {
    this.dataSource = this.http.get("/api/products");
  }

  ngOnInit() {
    this.dataSource.subscribe((data: any) => this.products = data);
  }
}
