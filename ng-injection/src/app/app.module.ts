import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductOneComponent } from "./product-one/product-one.component";
import { ProductService } from "./shared/product.service";
import { ProductTwoComponent } from "./product-two/product-two.component";
import { LoggerService } from "./shared/logger.service";

@NgModule({
    declarations: [AppComponent, ProductOneComponent, ProductTwoComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [ProductService, LoggerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
