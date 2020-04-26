import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class WebSocketService {
  ws: WebSocket;

  constructor () { }

  // 接收服务器消息，返回一个流
  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(observer => {
      // next
      this.ws.onmessage = event => observer.next(event.data);
      // error
      this.ws.onerror = event => observer.error(event);
      // complete
      this.ws.onclose = () => observer.complete();
    });
  }

  // 向服务器发送消息
  sendMessage(msg: string) {
    this.ws.send(msg);
  }
}
