import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {
  constructor() {}

  @Input()
  rating: number = 0;
  stars: Array<boolean>;

  ngOnInit() {
    this.stars = new Array(5)
      .fill(false)
      .fill(true, Math.trunc(this.rating), 5);
  }
}
