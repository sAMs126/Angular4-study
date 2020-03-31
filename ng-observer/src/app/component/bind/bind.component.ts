import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor () {
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 === 0)
      .map(e => e * e)
      .subscribe(
        // 处理流中发射出来的元素
        e => console.log(e),
        // 处理流中的异常
        err => console.error(err),
        // 在流结束时调用
        () => console.log("结束")
      )
  }

  ngOnInit() {
  }

}
