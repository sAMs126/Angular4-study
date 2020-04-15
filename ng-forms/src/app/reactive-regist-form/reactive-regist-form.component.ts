import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist-form',
  templateUrl: './reactive-regist-form.component.html',
  styleUrls: ['./reactive-regist-form.component.css']
})
export class ReactiveRegistFormComponent implements OnInit {

  formModel: FormGroup;

  constructor () {
    this.formModel = new FormGroup({
      username: new FormControl(),
      phone: new FormControl(),
      area: new FormControl(),
      pwdGroup: new FormGroup({
        password: new FormControl(),
        pconfirm: new FormControl()
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
