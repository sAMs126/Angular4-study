import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { phoneValidator } from 'app/validator/validators';

@Directive({
  selector: '[appPhoneNumber]',
  providers: [{ provide: NG_VALIDATORS, useValue: phoneValidator, multi: true }]
})
export class PhoneNumberValidatorDirective {

  constructor () { }

}
