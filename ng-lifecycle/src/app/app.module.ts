import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LifeComponent } from './component/life/life.component';
import { ChildComponent } from './component/child/child.component';
import { ChildBComponent } from './component/child-b/child-b.component';
import { ParentAComponent } from './component/parent-a/parent-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ChildBComponent,
    ParentAComponent
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
