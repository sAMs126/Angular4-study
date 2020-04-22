import { FormControl } from "@angular/forms";

export function positiveNumValidator(control: FormControl): any {
  if (control) {
    let num = Number(control.value);
    return num >= 0 ? null : { positiveNum: true };
  }
}