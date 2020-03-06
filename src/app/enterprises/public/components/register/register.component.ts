import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrerService } from './services/register.service';
import { Register } from './models/register.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RutValidator } from 'ng2-rut';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  
  formInvalid: boolean = false;
  register: Register;
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";


  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  constructor(private _formBuilder: FormBuilder,
              private _registrerService: RegistrerService,
              private rutValidator: RutValidator,
              private modalService: ModalService) { }

  ngOnInit() {
   
    this.registerForm = this._formBuilder.group({
      business_name: ['', [Validators.required, Validators.maxLength(50)]], 
      rut:  ['', [Validators.required, Validators.maxLength(50), this.rutValidator]], 
      name:  ['', [Validators.required, Validators.maxLength(50)]], 
      last_name: ['', [Validators.required, Validators.maxLength(50)]], 
      email:  ['', [Validators.required, Validators.pattern(this.emailPattern)]], 
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

       this.closeListOpenSingle([''], 'enterprises__register__modal')
     })
     .catch( (err)=> {
       console.log(err);
     })

    }

  }

  getMesaggeErrorBussinesName(){

    return this.f.business_name.getError('required')? 'Este campo es requerido' : '';    
  }

  getMesaggeErrorRut(){

    console.log(this.f.rut)
    return this.f.rut.getError('required')? 'Este campo es requerido' : this.f.rut.getError('invalidRut')? 'Rut invalido' : '';    
  }
  

  getMesaggeErrorName(){

    return this.f.name.getError('required')? 'Este campo es requerido' : '';    
  }

  getMesaggeErrorLastName(){

    return this.f.last_name.getError('required')? 'Este campo es requerido' : '';    
  }

  getMesaggeErrorEmail(){
    console.log(this.f.email)

    return this.f.email.getError('required')? 'Este campo es requerido' : this.f.email.getError('pattern')? 'Email invalido' : '';    

  }

  
  getMesaggeErrorPhone(){

    return this.f.phone.getError('required')? 'Este campo es requerido' : '';    
  }

  getMesaggeErrorPosition(){

    return this.f.position.getError('required')? 'Este campo es requerido' : '';    
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  _keyUp(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.key);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[0-9\k\K]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\k\K]/g, "");
      // invalid character, prevent input

    }
  }

}
