import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'app/shared/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor (private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        date => console.log(date),
        err => console.error(err),
        () => console.log("流已经结束。")
      )
  }

  sendMsgToServer() {
    this.wsService.sendMessage("Hello from Client.");
  }

}
