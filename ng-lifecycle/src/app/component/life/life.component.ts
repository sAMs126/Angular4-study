import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  Input
} from "@angular/core";

let logIndex: number = 1;

@Component({
  selector: "app-life",
  templateUrl: "./life.component.html",
  styleUrls: ["./life.component.css"]
})
export class LifeComponent
  implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input()
  name: string;

  constructor () {
    this.logMsg("constructor\t-- name: " + this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let name: string = changes['name'].currentValue;
    this.logMsg("ngOnChanges\t-- name: " + name);
  }

  ngOnInit(): void {
    this.logMsg("ngOnInit\t\t-- name: " + this.name);
  }

  ngDoCheck(): void {
    this.logMsg("ngDoCheck Method");
  }

  ngAfterContentInit(): void {
    this.logMsg("ngAfterContentInit Method");
  }

  ngAfterContentChecked(): void {
    this.logMsg("ngAfterContentChecked Method");
  }

  ngAfterViewInit(): void {
    this.logMsg("ngAfterViewInit Method");
  }

  ngAfterViewChecked(): void {
    this.logMsg("ngAfterViewChecked Method");
  }

  ngOnDestroy(): void {
    this.logMsg("ngOnDestroy Method");
  }

  logMsg(msg: string) {
    console.log(`#${logIndex++}\t ${msg}`);
  }

}
