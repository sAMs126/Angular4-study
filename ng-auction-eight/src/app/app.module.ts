import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

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
import { ProductFilterPipe } from './pipe/product-filter.pipe';
import { WebSocketService } from "./service/web-socket.service";

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
    HomeComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ProductService, WebSocketService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
