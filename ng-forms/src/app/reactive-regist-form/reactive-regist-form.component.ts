import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-regist-form",
  templateUrl: "./reactive-regist-form.component.html",
  styleUrls: ["./reactive-regist-form.component.css"]
})
export class ReactiveRegistFormComponent implements OnInit {

  formModel: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formModel = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      phone: ["", this.phoneValidator],
      area: [""],
      pwdGroup: this.fb.group(
        {
          password: [""],
          pconfirm: [""]
        },
        { validator: this.pwdEqualValidator }
      )
    });
  }

  ngOnInit() { }

  onSubmit() {
    let isValid = this.formModel.get("username").valid;
    console.log("username 的校验结果：" + isValid);
    let errors = this.formModel.get("username").errors;
    console.log("username 的错误信息：\n" + JSON.stringify(errors, null, 2));
    console.log(this.formModel.value);
  }

  // 自定义校验器 返回结果： { [key: string]: any }
  phoneValidator(control: FormControl): any {
    var reg = /^(13[0-9]{1}|14[5|7]|(15[0-9]{1})|(18[0-9]{1}))+\d{8}$/;
    let valid = reg.test(control.value);
    console.log("phone 的校验结果：" + valid);
    return valid ? null : { phone: true };
  }

  pwdEqualValidator(gruop: FormGroup): any {
    let password: FormControl = gruop.get("password") as FormControl;
    let pconfirm: FormControl = gruop.get("pconfirm") as FormControl;
    let valid = password.value === pconfirm.value;
    console.log("password 的校验结果：" + valid);
    return valid ? null : { equal: true };
  }
}
