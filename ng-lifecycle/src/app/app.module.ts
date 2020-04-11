import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LifeComponent } from './component/life/life.component';
import { ChildComponent } from './component/child/child.component';
import { ChildBComponent } from './component/child-b/child-b.component';
import { ParentAComponent } from './component/parent-a/parent-a.component';
import { ParentCComponent } from './component/parent-c/parent-c.component';
import { ChildDComponent } from './component/child-d/child-d.component';
import { ChildEComponent } from './component/child-e/child-e.component';
import { ParentEComponent } from './component/parent-e/parent-e.component';
import { ChildRouterComponent } from './component/child-router/child-router.component';

const routes: Routes = [
  { path: '', component: ChildEComponent },
  { path: 'child2', component: ChildRouterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ChildBComponent,
    ParentAComponent,
    ParentCComponent,
    ChildDComponent,
    ChildEComponent,
    ParentEComponent,
    ChildRouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
