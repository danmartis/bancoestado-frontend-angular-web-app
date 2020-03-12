import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"]
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm: FormGroup;
  formInvalid: boolean = false;

  constructor(private _formBuilder: FormBuilder,  private router: Router, private _dashboardService: DashboardService) {}

  ngOnInit() {
    this.resetPassForm = this._formBuilder.group({
      password: [
        "",
        [Validators.required, notStringValidator, notNumberValidator]
      ],
      passwordConfirm: ["", [Validators.required, confirmPasswordValidator]]
    });
  }

  get f() {
    return this.resetPassForm.controls;
  }

  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[a-zA-Z0-9]*$/;
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\k\K]/g, "");
      // invalid character, prevent input
    }
  }

  getMesaggeErrorPassword() {
    return this.f.password.getError("required")
      ? "Este campo es requerido"
      : this.f.password.getError("passwordNotString")
      ? "Debe contener al menos una letra"
      : this.f.password.getError("passwordNotNumber")
      ? "Debe contener al menos un numero"
      : "";
  }

  getMesaggeErrorPasswordConfirm() {
    return this.f.passwordConfirm.getError("required")
      ? "Este campo es requerido"
      : this.f.passwordConfirm.getError("passwordsNotMatching")
      ? "Contraseñas no coinciden"
      : "";
  }

  btnSendData() {
    if (this.resetPassForm.invalid) {
      this.formInvalid = true;

      console.log('jaja', this.resetPassForm)
    } else {
      this.formInvalid = false;

      const data = this.resetPassForm.getRawValue();

      console.log(data)

      this.router.navigate(['/empresas/resumen'])

      /* 
     this._registrerService.addRegister(data)
     .then( (res) => {
       console.log(res);

       this.closeListOpenSingle([''], 'enterprises__register__modal')
     })
     .catch( (err)=> {
       console.log(err);
     })

     */
    }
  }
}

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get("password");
  const passwordConfirm = control.parent.get("passwordConfirm");

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === "") {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};

export const notStringValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get("password");

  const patternString = "[a-z]";

  if (!password.value.match(patternString)) {
    console.log("not char in: ", password.value);
    return { passwordNotString: true };
  }
};

export const notNumberValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get("password");

  const patternDigit = "[0-9]";

  if (!password.value.match(patternDigit)) {
    console.log("not number in: ", password.value);
    return {passwordNotNumber: true }
  } else {
    return null
  }

};
