import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Product } from "app/product/product.component";
import { Observable } from "rxjs";

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product> | Promise<Product> {
    let productId: number = route.params["id"];
    if (1 == productId) {
      return new Product(1, "iPhoneX");
    } else {
      this.router.navigate(["/home"]);
      return undefined;
    }
  }
}
