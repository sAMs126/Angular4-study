import { FormControl, FormGroup } from "@angular/forms";

// 自定义校验器 返回结果： { [key: string]: any }
export function phoneValidator(control: FormControl): any {
  var reg = /^(13[0-9]{1}|14[5|7]|(15[0-9]{1})|(18[0-9]{1}))+\d{8}$/;
  let valid = reg.test(control.value);
  console.log("phone 的校验结果：" + valid);
  return valid ? null : { phone: true };
}

export function pwdEqualValidator(gruop: FormGroup): any {
  let password: FormControl = gruop.get("password") as FormControl;
  let pconfirm: FormControl = gruop.get("pconfirm") as FormControl;
  let valid = password.value === pconfirm.value;
  console.log("password 的校验结果：" + valid);
  return valid ? null : { equal: { desc: "两次密码不匹配" } };
}