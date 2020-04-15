import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist-form',
  templateUrl: './reactive-regist-form.component.html',
  styleUrls: ['./reactive-regist-form.component.css']
})
export class ReactiveRegistFormComponent implements OnInit {

  formModel: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formModel = this.fb.group({
      username: [''],
      phone: [''],
      area: [''],
      pwdGroup: this.fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
