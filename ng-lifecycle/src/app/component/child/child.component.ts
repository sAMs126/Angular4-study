import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  message: string = "初始化消息";

  oldUserNameTemp: string;

  changeDetected: boolean = false;

  noChangeCount: number = 0;

  constructor () { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. 
    //Use it to inject dependencies, but avoid any serious work here.
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked.
    //Use it to extend change detection by performing a custom check.
    if (this.user.name !== this.oldUserNameTemp) {
      this.changeDetected = true;
      console.log("DoCheck: user.name 从\t" + this.oldUserNameTemp + "\t变更为\t" + this.user.name);
      this.oldUserNameTemp = this.user.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount++;
      console.log("DoCheck: user.name 未发生改变，ngDoCheck 方法被调用\t" + this.noChangeCount + "\t次");
    }
    this.changeDetected = false;
  }
}
