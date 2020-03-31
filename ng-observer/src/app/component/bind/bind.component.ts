import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs"

@Component({
  selector: "app-bind",
  templateUrl: "./bind.component.html",
  styleUrls: ["./bind.component.css"]
})
export class BindComponent implements OnInit {
  searchInput: FormControl = new FormControl();

  constructor () {
    this.searchInput.valueChanges
      // 过滤字符串
      .filter(value => value.length > 2)
      // 防止抖动
      .debounceTime(500)
      .subscribe(value => this.search(value));
  }

  ngOnInit() { }

  search(value: string) {
    console.log(value);
  }
}
