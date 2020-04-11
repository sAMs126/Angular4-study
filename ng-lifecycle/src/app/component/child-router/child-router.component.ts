import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-router',
  templateUrl: './child-router.component.html',
  styleUrls: ['./child-router.component.css']
})
export class ChildRouterComponent implements OnInit, OnDestroy {

  constructor () { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log("ngOnDestroy \t\t\t\t%c组件销毁%c ChildRouterComponent", 'color: blue;','');
  }
}
