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
      last_name: ['', [Validators.required, Validators.email]], 
      email:  ['', [Validators.required]], 
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
  getMesaggeErrorUsername(){

    console.log(this.f.business_name.invalid)
    return this.f.business_name.getError('required')? 'Razón social es requerido' : '';    
  }



}
