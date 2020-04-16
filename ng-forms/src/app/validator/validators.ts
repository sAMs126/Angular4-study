import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

// 自定义校验器 返回结果： { [key: string]: any }
export function phoneValidator(control: FormControl): any {
  var reg = /^(13[0-9]{1}|14[5|7]|(15[0-9]{1})|(18[0-9]{1}))+\d{8}$/;
  let valid = reg.test(control.value);
  console.log("phone 的校验结果：" + valid);
  return valid ? null : { phone: true };
}

// 自定义异步校验器
export function phoneAsyncValidator(control: FormControl): any {
  var reg = /^(13[0-2]{1}|14[5|7]|(15[0-2]{1})|(18[0-2]{1}))+\d{8}$/;
  let valid = reg.test(control.value);
  console.log("phone 的异步校验结果：" + valid);
  return Observable.of(valid ? null : { phone: true }).delay(3000);
}

export function pwdEqualValidator(gruop: FormGroup): any {
  let password: FormControl = gruop.get("password") as FormControl;
  let pconfirm: FormControl = gruop.get("pconfirm") as FormControl;
  let valid = password.value === pconfirm.value;
  console.log("password 的校验结果：" + valid);
  return valid ? null : { equal: { desc: "两次密码不匹配" } };
}