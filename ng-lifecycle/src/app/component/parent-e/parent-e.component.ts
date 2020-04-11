import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-e',
  templateUrl: './parent-e.component.html',
  styleUrls: ['./parent-e.component.css']
})
export class ParentEComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor () { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log("ngAfterContentInit \t\t\t父组件投影内容 %c 初始化 \t\t%c 完毕", 'color: blue;', '');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    console.log("ngAfterContentChecked \t\t父组件投影内容 %c 变更检测 \t\t%c 完毕", 'color: green;', '');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngAfterContentChecked \t\t父组件%c视图内容 %c 初始化 \t\t%c 完毕", 'color: #ff7281;', 'color: red;', '');
  }

}
