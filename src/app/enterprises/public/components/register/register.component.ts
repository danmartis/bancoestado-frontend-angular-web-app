import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  
  formInvalid: boolean = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    //this.registerForm = this.createRegisterForm();

    this.registerForm = this._formBuilder.group({
      business_name: ['', [Validators.required]], 
      rut:  ['', [Validators.required]], 
      name:  ['', [Validators.required]], 
      last_name: ['', [Validators.required]], 
      email:  ['', [Validators.required, Validators.email]], 
      phone: ['', [Validators.required]],
      position: ['', [Validators.required]], 

    });


  }

  get f() { return this.registerForm.controls; }


  btnSendData(){

    if(this.registerForm.invalid){

      this.formInvalid = true;
    }

    else {
     this.formInvalid = false;
    }

  }
  getMesaggeErrorBussinesName(){

    console.log(this.f.business_name.invalid)
    return this.f.business_name.getError('required')? '*' : '';    
  }

  getMesaggeErrorRut(){

    console.log(this.f.rut.invalid)
    return this.f.rut.getError('required')? '*' : '';    
  }


  getMesaggeErrorName(){

    console.log(this.f.name.invalid)
    return this.f.name.getError('required')? '*' : '';    
  }

  getMesaggeErrorLastName(){

    console.log(this.f.last_name.invalid)
    return this.f.last_name.getError('required')? '*' : '';    
  }

  getMesaggeErrorEmail(){

    console.log(this.f.email.invalid)
    return this.f.email.getError('required')? '*' : '';    
  }

  
  getMesaggeErrorPhone(){

    console.log(this.f.phone.invalid)
    return this.f.phone.getError('required')? '*' : '';    
  }

  getMesaggeErrorPosition(){

    return this.f.position.getError('required')? '*' : '';    
  }


}
