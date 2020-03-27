import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search/search.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductComponent } from "./product/product.component";
import { StarsComponent } from "./stars/stars.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, Router, RouterModule } from "@angular/router";
import { ProductService } from "./service/product.service";

const routes: Routes = [
  {
    path: "product/:productId",
    component: ProductDetailComponent
  },
  {
    path: "",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule,RouterModule.forRoot(routes)],
  providers: [ProductService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
