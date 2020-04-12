import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit, OnChanges {
  constructor () { }

  @Input()
  rating: number = 0;

  // 将选中的星级评价发送给父组件
  // 时间名称必须为 XXXChange 才能在页面上使用双向绑定语法
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: Array<boolean>;

  @Input()
  readonly: boolean = true;

  ngOnInit() {
    // this.stars = new Array(5)
    //   .fill(false)
    //   .fill(true, Math.trunc(this.rating), 5);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // 父组件重置表单时，子组件监听数据变化
    // this.ngOnInit();
    this.stars = new Array(5)
      .fill(false)
      .fill(true, Math.trunc(this.rating), 5);
  }

  clickStart(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // 重新赋值 ==> 已被 ngOnChanges 监听不必手动重置
      // this.ngOnInit();
      // 推送给父组件
      this.ratingChange.emit(this.rating);
    }
  }

}
