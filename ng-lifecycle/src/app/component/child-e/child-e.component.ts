import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
  styleUrls: ['./child-e.component.css']
})
export class ChildEComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor () { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log("ngAfterContentInit \t\t\t子组件投影内容 %c 初始化 \t\t%c 完毕", 'color: blue;', '');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    console.log("ngAfterContentChecked \t\t子组件投影内容 %c 变更检测 \t\t%c 完毕", 'color: green;', '');
  }

}
