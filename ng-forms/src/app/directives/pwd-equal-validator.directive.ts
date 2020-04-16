import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { pwdEqualValidator } from 'app/validator/validators';

@Directive({
  selector: '[appPwdEqual]',
  providers: [{ provide: NG_VALIDATORS, useValue: pwdEqualValidator, multi: true }]
})
export class PwdEqualValidatorDirective {

  constructor () { }

}
