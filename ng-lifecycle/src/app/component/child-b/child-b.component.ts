import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor () { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(`Hello ${name}`);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngAfterViewInit \t\t子组件视图 %c 初始化 \t\t%c 完毕", 'color: blue;', '');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    console.log("ngAfterContentChecked \t子组件视图 %c 变更检测 \t\t%c 完毕", 'color: green;', '');
  }
}
