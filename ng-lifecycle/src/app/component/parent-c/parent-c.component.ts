import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent implements OnInit {

  title: string = "App Title";

  divContent: string = "<div>divContent</div>";

  constructor () { }

  ngOnInit() {
  }

}
