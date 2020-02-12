import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { LoginGuardGuard } from "./guard/login-guard.guard";
import { UnsavedGuardGuard } from "./guard/unsaved-guard.guard";
import { ProductResolve } from "./service/product.resolve";

const routes: Routes = [
  {
    path: "product/:id",
    component: ProductComponent,
    // 添加子路由
    children: [
      { path: "", component: ProductDescComponent },
      { path: "seller/:id", component: SellerInfoComponent }
    ],
    // canActivate: [LoginGuardGuard],
    // canDeactivate: [UnsavedGuardGuard],
    resolve: {
      product: ProductResolve
    }
  },
  {
    path: "feeds",
    component: FeedsComponent,
    outlet: "aux"
  },
  {
    path: "home",
    component: HomeComponent
  },
  // 路由重定向
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardGuard, UnsavedGuardGuard, ProductResolve]
})
export class AppRoutingModule {}
