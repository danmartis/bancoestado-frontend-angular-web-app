import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  isEditingProfile: boolean = false;

  profileForm: FormGroup;
  formInvalid: boolean = false;

  constructor(private _formBuilder: FormBuilder, ) { }

  formPofile(user){

 
    console.log('user', user)
    this.profileForm = this._formBuilder.group({
 
     birthday:  [user.birthday, [Validators.required]],
     phone:  [user.phone, [Validators.required]],
     address:  [user.address, [Validators.required, Validators.maxLength(50)]],
     zone:  [user.commune, [Validators.required, Validators.maxLength(50)]],
     city:  [user.city, [Validators.required, Validators.maxLength(50)]],
 
     });
     
   }

   
  get f() { return this.profileForm.controls; }

  
}
