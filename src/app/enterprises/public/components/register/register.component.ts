import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrerService } from './services/register.service';
import { Register } from './models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  
  formInvalid: boolean = false;
  register: Register;

  constructor(private _formBuilder: FormBuilder,
              private _registrerService: RegistrerService) { }

  ngOnInit() {

    //this.registerForm = this.createRegisterForm();

    this.registerForm = this._formBuilder.group({
      business_name: ['', [Validators.required, Validators.maxLength(50)]], 
      rut:  ['', [Validators.required, Validators.maxLength(50)]], 
      name:  ['', [Validators.required, Validators.maxLength(50)]], 
      last_name: ['', [Validators.required, Validators.maxLength(50)]], 
      email:  ['', [Validators.required, Validators.email]], 
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      position: ['', [Validators.required, Validators.maxLength(50)]], 

    });


  }

  get f() { return this.registerForm.controls; }


  btnSendData(){

    if(this.registerForm.invalid){

      this.formInvalid = true;
    }

    else {
     this.formInvalid = false;

     const data = this.registerForm.getRawValue();

     this.register = data;
     
     this._registrerService.addRegister(data)
     .then( (res) => {
       console.log(res);
     })
     .catch( (err)=> {
       console.log(err);
     })

    }

  }
  getMesaggeErrorBussinesName(){

    return this.f.business_name.getError('required')? '*' : '';    
  }

  getMesaggeErrorRut(){

    return this.f.rut.getError('required')? '*' : '';    
  }


  getMesaggeErrorName(){

    return this.f.name.getError('required')? '*' : '';    
  }

  getMesaggeErrorLastName(){

    return this.f.last_name.getError('required')? '*' : '';    
  }

  getMesaggeErrorEmail(){

    return this.f.email.getError('required')? '*' : '';    
  }

  
  getMesaggeErrorPhone(){

    return this.f.phone.getError('required')? '*' : '';    
  }

  getMesaggeErrorPosition(){

    return this.f.position.getError('required')? '*' : '';    
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


}
