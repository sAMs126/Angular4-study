import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

  phoneValid: boolean = true;
  phoneUntouched: boolean = true;

  phoneInput(userForm: NgForm) {
    if (userForm) {
      this.phoneValid = userForm.form.get('username').valid;
      this.phoneUntouched = userForm.form.get('username').untouched
    }
  }


}
