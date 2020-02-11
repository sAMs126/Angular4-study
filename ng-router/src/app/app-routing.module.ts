import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";
import { FeedsComponent } from "./feeds/feeds.component";

const routes: Routes = [
  {
    path: "product/:id",
    component: ProductComponent,
    // 添加子路由
    children: [
      { path: "", component: ProductDescComponent },
      { path: "seller/:id", component: SellerInfoComponent }
    ]
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
  exports: [RouterModule]
})
export class AppRoutingModule {}
