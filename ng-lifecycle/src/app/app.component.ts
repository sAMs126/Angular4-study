import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tom';

  greeting: string = "Hello";

  user: { name: string } = { name: "Tom" };

  message: string = "初始化消息";
}
