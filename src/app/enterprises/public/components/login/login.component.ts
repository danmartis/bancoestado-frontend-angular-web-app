import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id : string = "enterprises__login";

  modalName : string = "enterprises__login__modal__invalid-data";
  messageError: '';

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  constructor(private modalService: ModalService, private _loginService: LoginService, private _authService: AuthService, private _formBuilder: FormBuilder,   private router: Router) { }

  loginForm: FormGroup;
  
  formInvalid: boolean = false;
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  invalidLoginModal() {
    console.log('hola')
    this.modalService.toggle(this.modalName);
  }

  closeModal() {
    this.modalService.toggle(this.modalName);
  }


  ngOnInit() {

console.log(this._authService.currentUserValue)
    
   
    this.loginForm = this._formBuilder.group({
      rut: [ '76124890-1', [Validators.required, rutNotValid]], 
      email:  ['claudio.monasterio@telefonica.com', [Validators.required, Validators.pattern(this.emailPattern)]], 
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


     
     this._authService.loginUser(data)
      .then( (res: any) => {
       console.log(res);

     
      if(res.data.data.changePassword){

        this._loginService.changePassword = true;
      this.router.navigate(['/empresas/cambiar-clave'])

      }

      else {
       this.router.navigate(['/empresas/resumen'])
       this._loginService.changePassword = false;


      }


     })
     .catch( (err)=> {
       console.log(err);

       
      this.messageError = err.error.data.message

      this.invalidLoginModal()
     })

    }

  }

  
  getMesaggeErrorRut() {

    return this.f.rut.getError('required') ? 'Este campo es requerido' : this.f.rut.getError('rutInvalid') ? 'Rut empresa invalido' : '';
  }

  

  getMesaggeErrorEmail(){
    return this.f.email.getError('required')? 'Este campo es requerido' : this.f.email.getError('pattern')? 'Email invalido' : '';    

  }

  getMesaggeErrorPassword(){
    return this.f.password.getError('required')? 'Este campo es requerido' : '';    

  }


  onBackspace(){


    const value =  this.f.rut.value;

    if  (value.match(/\./g, '')) {
     
    const dot = this.f.rut.value.replace(/\./g, '');
    const div = dot.replace(/\-/g, '')
    this.f.rut.setValue(div)
    }


}

}

export const rutNotValid: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const rut = control.parent.get("rut");
  let valor = rut.value.replace(/\./g, "");
  let valorDespejado = valor.replace("-", "");
  let cuerpo = valorDespejado.slice(0, -1);
  let dv = valorDespejado.slice(-1).toUpperCase();
  let rutEmpresa = valorDespejado.slice(0, 2);
  console.log(`Rut empresa: ${rutEmpresa}`);

  if (cuerpo.length < 7) {
    return { rutInvalid: true }
  } else if (rutEmpresa < 50) {
    return { rutInvalid: true }
  }
  let suma = 0;
  let multiplo = 2;
  for (let i = 1; i <= cuerpo.length; i++) {
    let index = multiplo * valor.charAt(cuerpo.length - i);
    suma = suma + index;
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  let dvEsperado = 11 - (suma % 11);
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;
  if (dvEsperado != dv) {
    return { rutInvalid: true }
  }
  
  return null;
};

