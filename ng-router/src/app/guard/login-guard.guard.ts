import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginGuardGuard implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log("用户未登录！");
    }
    return loggedIn;
  }
}
