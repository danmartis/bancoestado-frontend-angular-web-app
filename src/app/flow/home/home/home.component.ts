import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as introJs from 'intro.js/intro.js';

import { ModalService } from 'src/app/shared/services/modal.service';

import { getElementFromArray, session, formatNumber } from 'src/app/shared/utils/utils';
import { PaymentAccount, ClientNumber, PaymentFee } from 'src/app/shared/utils/types';
import { introOptions, getSwiperOptions } from 'src/app/shared/utils/utils';
import { generateMockAccount } from 'src/app/shared/utils/mock-data';
import { paymentAccount } from 'src/app/shared/utils/voidObject';

//modificacion
import { HomeFacade } from './home.facade';
import { Router } from '@angular/router';
import { ParametroService } from '../../../domain/parametro.service';

import { Convenio } from 'src/app/domain/convenio.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService, HomeFacade],
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() maxlength: string;

  protected intro = introJs();
  protected estado: boolean = false;
  protected clientNumberFound : string = '';

  protected multiClientNumberFound : Array<ClientNumber> = [
    { number: '15763-1', extra: '+569 3227 05 62'},
    { number: '15712-2', extra: '+569 3227 05 62'},
    { number: '15123-3', extra: '+569 3227 05 62'},
  ];

  protected accountList : Array<PaymentAccount> = [];
  protected accountSelected : PaymentAccount = paymentAccount;
  protected counter : number = 0;
  protected account : PaymentAccount = paymentAccount;
  protected config: SwiperOptions = getSwiperOptions();
  protected feesToPay : number = 0;
  protected hiddenAlias : boolean = false;

  public conveniosFiltrados = [];
  public ayuda = false;
  public IddeCliente: any;
  public imagenAyuda: any;
  public datosBusqueda: any[] = [];
  public selectConvenio: Convenio;
  public activo: boolean = false;
  public estadoError: string = '';

  constructor(protected modalService: ModalService, private homeFacade: HomeFacade,
    private router: Router,
    private parametroService: ParametroService) {
    }

  ngOnInit() {
    this.accountList = this.parametroService.getParametro('carruselCtas') || [];
    console.log('this.accountList', this.accountList);
  }
  ngOnChanges() {}

  ngAfterViewInit(): void {
    if (session.isFirstTime()){
      setTimeout(() => {
            this.intro.setOptions(introOptions('Agregar cuentas', 'Con esta opción podrás agregar las cuentas que desean pagar'));
            this.intro.start();
            session.firstTime('no-registrado');
      }, 100);
    }
  }

  private buildAccount() {
    this.account = { title: '', clientNumber: '', value: 100000, uniqueId: -1, type: '' };
  }

  toggleModalCenter(name : string) {
    this.modalService.toggle(name);
  }

  addAccount(name : string) {
    if (this.account.clientNumber !== '' && this.account.title !== '') {
      console.log('accountList:', this.accountList, this.account);
      console.log('account:', this.account);
      // modal-error-identifier
      if (this.account.clientNumber === '1112') {
        this.modalService.closeListOpenSingle(['modal-added-account'], 'modal-error-identifier');
        return;
      }
  
      // modal-error-service
      if (this.account.clientNumber === '1113') {
        this.modalService.closeListOpenSingle(['modal-added-account'], 'modal-error-service');
        return;
      }
  
      // modal-no-debt
      if (this.account.clientNumber === '1114') {
        this.modalService.closeListOpenSingle(['modal-added-account'], 'modal-no-debt');
        return;
      }
      if (!this.homeFacade.existAccountInSlice(this.accountList, this.account)) {
        this.homeFacade.agregarCuenta(this.selectConvenio.idConvenio, this.account.clientNumber).then((cuenta) => {
          this.accountList.push({
            ...this.account,
            type: getElementFromArray(this.selectConvenio.rubro.nombreRubro !== undefined ? this.selectConvenio.rubro.nombreRubro : ''),
            value: cuenta.montoPorDefecto,
            counter: ++this.counter,
            fullPayment: cuenta.montoTotal,
            expirePayment: cuenta.montoVencido,
          });
          this.parametroService.addParametro('carruselCtas',this.accountList);
          this.buildAccount();
          this.modalService.toggle(name);
        }, () => {
          console.log('No encontro la cuenta');
        });
      } else {
        console.log('Cuenta se encuentra agregada');
      }
    } 
  }

  handlerChangeTitle(text : string) {
    this.account.title = text;
    this.selectConvenio = { idConvenio: -1, empresa: '', servicio: '', imgCuenta: '', rubro: { idRubro: -1, logotipo: '', nombreRubro: '' } };
  }

  handlerChangeBusqueda(text : string, idx: number) {
    for (let i = 0; i < this.datosBusqueda.length; i++) {
      if (idx == i) {
        this.datosBusqueda[i].valor = text;
      }
    }
  }

  handlerChangeType(text : string) {
    this.account.clientNumber = text;
  }

  delete(counter : number) {
    this.accountList = this.accountList.filter(e => e.counter !== counter);
  }

  getTotal () : string {
    this.parametroService.addParametro('totalPagar', formatNumber(this.accountList.reduce((prev, curr) => prev + curr.value, 0)));
    return formatNumber(this.accountList.reduce((prev, curr) => prev + curr.value, 0));
  }

  getSizeList () : number {
    return this.accountList.length
  }

  formatNumber(num : string) : string {
    return formatNumber(num);
  }

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }
  
  assingClientNumber() {
    console.log('paso assingClientNumber home.component');
    this.account.clientNumber = this.clientNumberFound;
    this.modalService.closeListOpenSingle(['modal-client-number-result'], 'modal-added-account');
  }

  openDialogAddAccount() {
    this.intro.exit(true);
    this.toggleModalCenter('modal-added-account');
    //modificacion
    this.homeFacade.buscaConvenio();
  }

  isLogin() {
    return session.isLogin();
  }
  isLogout() {
    return session.isLogout();
  }

  showDetail($event, account : PaymentAccount) {
    this.accountSelected = account;
    if (this.accountSelected) {
      this.modalService.closeListOpenSingle([], 'modal-card-detail');
    }
  }

  toggleAlias() {
    this.hiddenAlias = !this.hiddenAlias;
  }

  getClientNumberStatus() {
    switch (this.account.title) {
      case '1111':
        return 'invalid';
    
      default:
        return '';
    }
  }

  getClientNumberFound() : Array<ClientNumber> {
    return this.account.title === 'Claro' ? this.multiClientNumberFound : [{ number: this.clientNumberFound}];
  }

  //modificacion
  getQueQuieresPagar(biller) {
    this.estadoError = '';
    this.ayuda = false;
      this.conveniosFiltrados = this.homeFacade.filtrar(biller);
      if(biller.length >= 3 && this.conveniosFiltrados.length == 0){
          this.estadoError = 'invalid';
      }
  }

  public getValidaCaracter(tecla: KeyboardEvent): boolean{
    const keyval = (tecla.keyCode === 0) ? tecla.charCode : tecla.keyCode;
    return (keyval >= 97 && keyval <= 122) || (keyval >= 65 && keyval <= 90) || (keyval >= 48 && keyval <= 57) || keyval == 45 || keyval == 32;
  }

  getAyuda() {
    this.homeFacade.buscarAyudaConvenio(this.selectConvenio.idConvenio).then((ayuda) => {
      this.IddeCliente = ayuda.nombreIdentificador;
      this.imagenAyuda = ayuda.imagenAyuda;
      this.closeListOpenSingle(['modal-added-account'], 'modal-client-number');
      this.getBusquedaAvanzada();
    }, (error) => {
      this.ayuda = false;
      console.log(error);
    });
  }

  getBusquedaAvanzada() {
    this.datosBusqueda = [];
    this.homeFacade.busquedaAvanzadaIdentificador(this.selectConvenio.idConvenio).then((busquedaAvanzada) => {
      for (let i = 0; i < busquedaAvanzada.length; i++){
        this.datosBusqueda.push(busquedaAvanzada[i]);
      }
      if(busquedaAvanzada.length == 0){
        console.log('sin datos');
        this.activo = false;
        console.log('activo false',this.activo);
      }
      else{
        this.activo = true;
        console.log('activo true',this.activo);
        //this.closeListOpenSingle(['modal-client-number'],'modal-advanced-search');
      }
      
    }, (error) => {
      console.log(error);
    })
  }

  selectElement(event) {
    this.selectConvenio = event;
    this.account.title = event.servicio;
    this.ayuda = true;
  }

  getIdentificadorCta() {
    this.homeFacade.buscarNumeroCliente(this.selectConvenio.idConvenio, this.datosBusqueda).then((identificador) => {
      console.log('getIdentificadorCta identificador', identificador);

      this.clientNumberFound = identificador;
      this.closeListOpenSingle(['modal-advanced-search'],'modal-client-number-result');
    });
  }

  clearAccountModal() {
    this.buildAccount();
    this.conveniosFiltrados = [];
    this.selectConvenio = { idConvenio: -1, empresa: '', servicio: '', imgCuenta: '', rubro: { idRubro: -1, logotipo: '', nombreRubro: '' } };
  }

  goToPaymentMethod(){
    this.parametroService.deleteParametro('carruselCtas');
    this.parametroService.addParametro('carruselCtas', this.accountList);
    console.log('gotopay', this.accountList.length);
    if(this.accountList.length != 0){
      this.router.navigate(['/payment/payment-method']);
      // { queryParams: { total: this.getTotal() }}
      this.parametroService.addParametro('totalPagar', this.getTotal());
    } 
  }

  getAddAccountDisabled(): boolean {
    return (this.account.title !== '' && this.account.clientNumber !== '');
  }
  
}
