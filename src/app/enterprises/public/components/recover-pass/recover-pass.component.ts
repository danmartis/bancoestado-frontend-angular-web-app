import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { RecoverPassService } from './services/recover-pass.service';


@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent implements OnInit {

  id : string = "enterprises__login";

  modalName : string = "enterprises__login__modal__invalid-data";

  modalNameSucces: string = "enterprises__login__modal__success-data";


  messageTitle:''
messageDesc: ''

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  constructor(private modalService: ModalService, private _authService: AuthService,  private _recoverPassService: RecoverPassService ,private _formBuilder: FormBuilder,   private router: Router) { }

  loginForm: FormGroup;
  
  formInvalid: boolean = false;
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  
  invalidLoginModal() {
    console.log('hola')
    this.modalService.toggle(this.modalName);
  }

  successModal() {
    console.log('hola')
    this.modalService.toggle(this.modalNameSucces);
  }

  closeModal() {
    this.modalService.toggle(this.modalName);
  }


  ngOnInit() {

console.log(this._authService.currentUserValue)
    
   
    this.loginForm = this._formBuilder.group({
      rut: [ '', [Validators.required, rutNotValid]], 
      email:  ['', [Validators.required, Validators.pattern(this.emailPattern)]], 
     
    });

    console.log(this.f.rut)

  }

  get f() { return this.loginForm.controls; }


  btnSendData(){

    if(this.loginForm.invalid){

      this.formInvalid = true;

     

      console.log( this.formInvalid)
    }

    else {
     this.formInvalid = false;

     const data = this.loginForm.getRawValue();

     console.log(data)

     const rut = data.rut.replace(/["."]/g, "");


  
     this._recoverPassService.recoverPass(rut, data.email)
      .then( (res: any) => {
       console.log(res);

     this.successModal()

     // this.router.navigate(['/empresas/iniciar-sesion'])
      



     })
     .catch( (err)=> {
       console.log(err);

       
      this.messageTitle = err.error.data.data.titulo
      this.messageDesc = err.error.data.data.descripcion
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

  statusValidRut(){

   return (this.f.rut.hasError('required') || this.f.rut.hasError('rutInvalid'))  && this.formInvalid ? 'invalid' : ( !this.f.rut.hasError('required') || !this.f.rut.hasError('rutInvalid') ) && this.formInvalid? 'valid': '' 
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

