import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id : string = "enterprises__login";

  constructor(private _loginService: LoginService, private _formBuilder: FormBuilder,   private router: Router) { }

  loginForm: FormGroup;
  
  formInvalid: boolean = false;
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";


  ngOnInit() {
   
    this.loginForm = this._formBuilder.group({
      rut: [ '11111111-1', [Validators.required]], 
      email:  ['cliente@cliente.cl', [Validators.required, Validators.pattern(this.emailPattern)]], 
      password: ['', [Validators.required]],
    });

    console.log(this.f.rut)

  }

  get f() { return this.loginForm.controls; }


  btnSendData(){

    if(this.loginForm.invalid){

      this.formInvalid = true;

     

      console.log( this.formInvalid  ,  this.loginForm)
    }

    else {
     this.formInvalid = false;

     const data = this.loginForm.getRawValue();

     console.log(data)

    console.log(this.f.password)
     
     this._loginService.loginUser(data)
     .then( (res: any) => {
       console.log(res);

     
      if(res.data.changePassword){
      this.router.navigate(['/empresas/cambiar-clave'])

      }

      else {
       // this.router.navigate(['/empresas/registro'])

      }


     })
     .catch( (err)=> {
       console.log(err);


       this.f.rut.setErrors({'userNotFound': true});
     })

    }

  }

  
  getMesaggeErrorRut(){

    return this.f.rut.getError('required')? 'Este campo es requerido' : '';    
  }
  

  getMesaggeErrorEmail(){
    return this.f.email.getError('required')? 'Este campo es requerido' : this.f.email.getError('pattern')? 'Email invalido' : '';    

  }

  getMesaggeErrorPassword(){
    return this.f.password.getError('required')? 'Este campo es requerido' : '';    

  }

}
