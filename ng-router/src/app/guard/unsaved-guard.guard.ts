import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductComponent } from "app/product/product.component";

@Injectable()
export class UnsavedGuardGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(
    component: ProductComponent
  ): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm("你还没有保存，确定要离开吗？");
  }
}
