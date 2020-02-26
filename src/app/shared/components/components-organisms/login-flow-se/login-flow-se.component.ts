import { Component, OnInit, HostListener } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { emailValidate, isSpecialCharacterEmail, isNumber, validatePassSE, validateNameRegSE } from 'src/app/shared/utils/utils';
import { colors, PaymentAccountAndGroupStatus } from 'src/app/shared/utils/options';
import { RegistroSeService } from 'src/app/shared/services/registro-se.service';

@Component({
  selector: 'app-login-flow-se',
  templateUrl: './login-flow-se.component.html',
  styleUrls: ['./login-flow-se.component.scss']
})
export class LoginFlowSeComponent implements OnInit {

  public nombre: string = '';
  public correo: string = '';
  public isValidName: boolean = false;
  public statusName: string = '';
  public isValidEmail: boolean = false;
  public statusEmail: string = '';
  public btnCreateAccountDisabled: boolean = true;
  public pass1: string = '';
  public isValidPass1: boolean = false;
  public statusPass1: string = '';
  public pass2: string = '';
  public isValidPass2: boolean = false;
  public statusPass2: string = '';
  public passwordsOk: boolean = false;

  protected checkColor = colors[PaymentAccountAndGroupStatus.Success];

  constructor(protected modalService:ModalService, private registroSeService: RegistroSeService) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  // Registro Inicial (nombre, correo)
  handlerChangeName(text: string) {
    this.nombre = text;
  }

  handlerChangeEmail(text: string) {
    this.correo = text;
  }

  validateName(str: string): boolean {
    this.isValidName = validateNameRegSE(str);
    this.validateForm();
    this.statusName = this.setIconStatus(this.isValidName);
    return this.isValidName;
  }

  validateEmail(str: string): boolean {
    this.isValidEmail = emailValidate(str);
    this.statusEmail = this.setIconStatus(this.isValidEmail);
    this.validateForm();
    return this.isValidEmail;
  }

  validateKeySpecial(event: KeyboardEvent): boolean {
    return isSpecialCharacterEmail(event.key);
  }

  validateIsLetter(event: KeyboardEvent) {
    return validateNameRegSE(event.key);
  }

  validateForm() {
    this.btnCreateAccountDisabled =  !this.isValidEmail || !this.isValidName;
  }

  createAccountInit() {
    if (!!this.isValidName && !!this.isValidEmail) {
      console.log('Se creo la cuenta');
      const body = { nombre: this.nombre, correo: this.correo };
      console.log('body:', body);
      this.registroSeService.registroInicial(body).subscribe((result) => {
        console.log('Registrado correctamente, se envio el código: ', result.getDetalle().codigo);
        this.closeListOpenSingle([], 'modal-login-se-code');
      }, (error) => {
        console.log(error);
      });
    }
  }
  // Fin registro Inicial

  // Registro validacion correo
  validateIsNumber(event: KeyboardEvent): boolean {
    return isNumber(event);
  }

  createAccountValidation(v1, v2, v3, v4, v5, v6) {
    const codigoV = v1.value+v2.value+v3.value+v4.value+v5.value+v6.value;
    const body = { codigo: codigoV , correo: this.correo };
    this.registroSeService.registroValidacion(body).subscribe((result)=> {
      console.log(result.getMensaje());
      this.closeListOpenSingle(['modal-login-se-code'], 'modal-login-flow-se-password');
    }, (error) => {
      console.log(error.getDetalle());
    });
  }
  // Fin Registro validacion correo

  // Registro guardar contraseña
  handlerChangePass1(text: string) {
    this.pass1 = text;
  }

  handlerChangePass2(text: string) {
    this.pass2 = text;
  }

  validatePassSE(event): boolean {
    return validatePassSE(event.key);
  }

  validatePasswords(pass1, pass2) : boolean {
    this.isValidPass1 = (validatePassSE(pass1) && (pass1.length >= 6 && pass1.length <= 10));
    this.statusPass1 = this.setIconStatus(this.isValidPass1);
    this.isValidPass2 = ((validatePassSE(pass2) && (pass2.length >= 6 && pass2.length <= 10)) && (pass1 === pass2));
    this.statusPass2 = this.setIconStatus(this.isValidPass2);
    this.passwordsOk = ((this.isValidPass1 && this.isValidPass2) && (pass1 === pass2));
    return this.isValidPass1 && this.isValidPass2 && this.passwordsOk;
  }

  createAccountEnd(pass1, pass2) {
    console.log('Password:', pass1, 'Repetir Password:', pass2);
    if (this.validatePasswords(pass1, pass2)) {
      const body = { password: pass1, correo: this.correo };
      console.log(body);
      this.registroSeService.registroFinal(body).subscribe((result) => {
        console.log(result);
        this.closeListOpenSingle(['modal-login-flow-se-password'], 'modal-login-flow-se-success')
      }, (error) => {
        console.log(error);
      });
    }
  }

  setIconStatus(isValid): string {
    return (!!isValid ? 'valid' : '');
  }
  // Fin Registro guardar contraseña

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

}
