import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ModalAccountErrorsComponent } from 'src/app/shared/components/components-organisms/modal-account-errors/modal-account-errors.component';
import { ModalEditAccountDetailComponent } from 'src/app/shared/components/components-organisms/modal-edit-account-detail/modal-edit-account-detail.component';
import { ModalCardDetailComponent } from 'src/app/shared//components/components-organisms/modal-card-detail/modal-card-detail.component';
import { ModalClientNumberResultComponent } from 'src/app/shared/components/components-organisms/modal-client-number-result/modal-client-number-result.component';
import { ModalBottomComponent } from 'src/app/shared/components/components-organisms/modal-bottom/modal-bottom.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { LabelComponent } from 'src/app/shared/components/components-atom/label/label.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { ActionFooterComponent } from 'src/app/shared/components/action-footer/action-footer.component';
import { RegisteredPaymentMethodsComponent } from 'src/app/shared/components/registered-payment-methods/registered-payment-methods.component';
import { AccountGroupComponent } from 'src/app/shared/components/account-group/account-group.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { CardAccountComponent } from 'src/app/shared/components/card-account/card-account.component';
import { CardAddedAccountComponent } from 'src/app/shared/components/card-added-account/card-added-account.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { BadgeComponent } from 'src/app/shared/components/components-atom/badge/badge.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { SwiperComponent } from 'ngx-useful-swiper';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { RadioComponent } from 'src/app/shared/components/components-atom/radio/radio.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { BackButtonComponent } from 'src/app/shared/components/components-atom/back-button/back-button.component';
import { PaymentCardComponent } from 'src/app/shared/components/components-organisms/payment-card/payment-card.component';
import { CardAccountGroupComponent } from 'src/app/shared/components/card-account-group/card-account-group.component';
import { AddGroupFlowComponent } from 'src/app/shared/components/components-organisms/add-group-flow/add-group-flow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardGroupComponent } from 'src/app/shared/components/card-group/card-group.component';
import { CardAddedGroupComponent } from 'src/app/shared/components/card-added-group/card-added-group.component';
import { EmptyAreasComponent } from 'src/app/shared/components/empty-areas/empty-areas.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CardMethodPaymentComponent } from 'src/app/shared/components/card-method-payment/card-method-payment.component';
import { MessagePaymentComponent } from 'src/app/shared/components/message-payment/message-payment.component';
import { IconGroupComponent } from 'src/app/shared/components/components-atom/icon-group/icon-group.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { ConveniosService } from 'src/app/shared/services/convenios.service';
import { ConveniosServiceMock } from 'src/app/shared/services/convenios.service.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from '../../../domain/parametro.service';
import { ModalBenefitsComponent } from 'src/app/shared/components/components-organisms/modal-benefits/modal-benefits.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        FooterDefaultComponent,
        PageComponent,
        ModalAccountErrorsComponent,
        ModalEditAccountDetailComponent,
        ModalCardDetailComponent,
        ModalClientNumberResultComponent,
        ModalBottomComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent,
        ModalTitleComponent,
        LabelComponent,
        CheckboxComponent,
        InputComponent,
        ActionFooterComponent,
        RegisteredPaymentMethodsComponent,
        AccountGroupComponent,
        CardDefaultComponent,
        CardAccountComponent,
        CardAddedAccountComponent,
        PageTitleComponent,
        BadgeComponent,
        CapsuleComponent,
        HeaderMainComponent,
        SwiperComponent,
        IconComponent,
        RadioComponent,
        CardAccountDetailComponent,
        ModalComponent,
        BackButtonComponent,
        PaymentCardComponent,
        CardAccountGroupComponent,
        AddGroupFlowComponent,
        CardGroupComponent,
        CardAddedGroupComponent,
        EmptyAreasComponent,
        SidebarComponent,
        CardMethodPaymentComponent,
        MessagePaymentComponent,
        IconGroupComponent,
        ImageComponent,
        ModalBenefitsComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule
      ],
      providers: [
        ParametroService,
        {provide: ConveniosService, useClass: ConveniosServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.selectConvenio = {
      idConvenio : 101,
      empresa:'',
      imgCuenta:'',
      servicio:'',
      rubro: {
        idRubro:1,
        logotipo:'',
        nombreRubro:''
      }
      
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleModalCenter', () => {
    component.toggleModalCenter('app-card-added-account');
  });
  
  it('handlerChangeTitle', () => {
    component.handlerChangeTitle('app');
  });

  it('handlerChangeBusqueda', () => {
    component.handlerChangeBusqueda('app',0);
  });
  
  it('handlerChangeType', () => {
    component.handlerChangeType('app');
  });
  
  it('delete', () => {
    component.delete(0);
  });
  
  it('getTotal', () => {
    component.getTotal();
  });
  
  it('getSizeList', () => {
    component.getSizeList();
  });
  
  it('formatNumber', () => {
    component.formatNumber('0');
  });
  
  it('assingClientNumber', () => {
    component.assingClientNumber();
  });
  
  it('openDialogAddAccount', () => {
    component.openDialogAddAccount();
  });
  
  it('isLogin', () => {
    component.isLogin();
  });
  
  it('isLogout', () => {
    component.isLogout();
  });
  
  it('toggleAlias', () => {
    component.toggleAlias();
  });
  
  it('getClientNumberStatus', () => {
    component.getClientNumberStatus();
  });
  
  it('getClientNumberFound', () => {
    component.getClientNumberFound();
  });
  
  it('getQueQuieresPagar', () => {
    component.getQueQuieresPagar('Movistar Hogar');
  });

  it('ngOnChanges', () => {
    component.ngOnChanges();
  });

  it('clearAccountModal', () => {
    component.clearAccountModal();
  });

  it('goToPaymentMethod', () => {
    component.goToPaymentMethod();
  });

  it('selectElement', () => {
    const event = {id: 101, convenio: "Movistar Hogar", empresa: "Movistar", rubro: "Telefonía Hogar"};
    component.selectElement(event);
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
  });

  it('getAyuda', () => {
    component.getAyuda();
  });
  
  it('getIdentificadorCta', () => {
    component.getIdentificadorCta();
  });

  it('addAccount', () => {
    component.addAccount('');
  });

  it('getValidaCaracter', () => {
    const event = new KeyboardEvent('keypress', { code: 'Q', key: 'Q' });
    component.getValidaCaracter(event);
  });

});
