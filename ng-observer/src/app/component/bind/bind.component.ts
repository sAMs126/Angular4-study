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
        e => console.log(e),
        err => console.error(err),
        () => console.log("结束")
      )
  }

  ngOnInit() {
  }

}
