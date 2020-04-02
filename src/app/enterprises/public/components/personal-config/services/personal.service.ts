import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class PersonalService {
  isEditingProfile: boolean = false;

  profileForm: FormGroup;
  formInvalid: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  formPofile(user) {
    console.log("user", user);
    this.profileForm = this._formBuilder.group({
      birthday: [user.birthday, [Validators.required]],
      phone: [user.phone, [Validators.required, Validators.minLength(12), this.phoneFormat]],
      address: [user.address, [Validators.required, Validators.maxLength(50)]],
      zone: [user.commune, [Validators.required, Validators.maxLength(50)]],
      city: [user.city, [Validators.required, Validators.maxLength(50)]]
    });
  }

  phoneFormat: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || !control) {
      return null;
    }
      const phoneFormat = "\\+569";
      const plus = "\\+";
      const phone = control.parent.get("phone");
      const phoneNumber = phone.value;
      if(!phoneNumber.substring(0, 4).match(phoneFormat)) {
        return { badFormat: true };
    }
    if(phoneNumber.substring(5, phoneNumber.length).match(plus)) {
      return { badNumber: true }
    }
    return null;
  }

  get f() {
    return this.profileForm.controls;
  }
}
