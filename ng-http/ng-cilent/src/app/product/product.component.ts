import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Http } from "@angular/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  // dataSource: Observable<any>;

  // products: Array<any> = [];
  products: Observable<any>;

  constructor (private http: HttpClient) {
    // this.dataSource = this.http.get("/api/products");
    this.products = this.http.get("/api/products", httpOptions);
  }

  ngOnInit() {
    // this.dataSource.subscribe((data: Array<any>) => this.products = data);
  }
}
