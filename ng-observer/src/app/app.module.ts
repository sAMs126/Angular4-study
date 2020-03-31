import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindComponent } from './component/bind/bind.component';
import { PipeComponent } from './component/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 引入响应式编程模块
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
