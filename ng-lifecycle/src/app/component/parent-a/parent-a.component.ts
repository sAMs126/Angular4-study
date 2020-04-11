import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild("child1")
  child1: ChildBComponent

  msg: string;

  constructor () { }

  ngOnInit() {
    setInterval(() => {
      // 父组件调用子组件方法 
      this.child1.greeting("Tom");
    }, 5000);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngAfterViewInit \t\t父组件视图 %c 初始化 \t\t%c 完毕", 'color: blue;', '');

    // 在视图初始化后修改组件属性
    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'undefined'. Current value: 'hello'.
    // this.msg = "hello";
    // 技巧：
    setTimeout(() => {
      this.msg = "Hello";
    }, 0);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    console.log("ngAfterViewChecked \t\t父组件视图 %c 变更检测 \t\t%c 完毕", 'color: green;', '');
  }

}
