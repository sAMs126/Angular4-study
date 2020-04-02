import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { StockChildComponent } from './component/stock-child/stock-child.component';
import { OrderChildComponent } from './component/order-child/order-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    StockChildComponent,
    OrderChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
