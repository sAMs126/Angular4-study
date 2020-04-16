import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { phoneValidator, pwdEqualValidator } from "app/validator/validators";

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
      phone: ["", phoneValidator],
      area: [""],
      pwdGroup: this.fb.group(
        {
          password: ["", Validators.minLength(6)],
          pconfirm: [""]
        },
        { validator: pwdEqualValidator }
      )
    });
  }

  ngOnInit() { }

  onSubmit() {
    let isValid = this.formModel.get("username").valid;
    console.log("username 的校验结果：" + isValid);
    let errors = this.formModel.get("username").errors;
    console.log("username 的错误信息：\n" + JSON.stringify(errors, null, 2));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
