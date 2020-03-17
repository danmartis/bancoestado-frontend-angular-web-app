import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id : string = "enterprises__login";

  modalName : string = "enterprises__login__modal__invalid-data";

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  invalidLoginModal() {
    console.log('hola')
    this.modalService.toggle(this.modalName);
  }

  constructor(private modalService: ModalService) { }

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
     .then( (res) => {
       console.log(res);

     
      if(res.changePassword){
      //  this.router.navigate(['/empresas/registro'])

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
