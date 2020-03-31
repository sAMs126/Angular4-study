import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  day: Date = new Date();

  pi: number = Math.PI * 1000;

  mul: number = 10;

  constructor () { }

  ngOnInit() {
  }

}
