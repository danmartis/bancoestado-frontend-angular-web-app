/*import { HomeFacade } from './home.facade';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConveniosService } from 'src/app/shared/services/convenios.service';
import { ConveniosServiceMock } from 'src/app/shared/services/convenios.service.spec';
import { HomeComponent } from './home.component';

import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ModalBenefitsComponent } from 'src/app/shared/components/components-organisms/modal-benefits/modal-benefits.component';
import { ModalAccountErrorsComponent } from 'src/app/shared/components/components-organisms/modal-account-errors/modal-account-errors.component';
import { ModalEditAccountDetailComponent } from 'src/app/shared/components/components-organisms/modal-edit-account-detail/modal-edit-account-detail.component';
import { ModalCardDetailComponent } from 'src/app/shared/components/components-organisms/modal-card-detail/modal-card-detail.component';
import { ModalClientNumberResultComponent } from 'src/app/shared/components/components-organisms/modal-client-number-result/modal-client-number-result.component';
import { ModalBottomComponent } from 'src/app/shared/components/components-organisms/modal-bottom/modal-bottom.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { ActionFooterComponent } from 'src/app/shared/components/action-footer/action-footer.component';
import { RegisteredPaymentMethodsComponent } from 'src/app/shared/components/registered-payment-methods/registered-payment-methods.component';
import { AccountGroupComponent } from 'src/app/shared/components/account-group/account-group.component';
import { CardAccountComponent } from 'src/app/shared/components/card-account/card-account.component';
import { CardAddedAccountComponent } from 'src/app/shared/components/card-added-account/card-added-account.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { BadgeComponent } from 'src/app/shared/components/components-atom/badge/badge.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { LabelComponent } from 'src/app/shared/components/components-atom/label/label.component';
import { SwiperComponent } from 'ngx-useful-swiper';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { RadioComponent } from 'src/app/shared/components/components-atom/radio/radio.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { BackButtonComponent } from 'src/app/shared/components/components-atom/back-button/back-button.component';
import { PaymentCardComponent } from 'src/app/shared/components/components-organisms/payment-card/payment-card.component';
import { AddGroupFlowComponent } from 'src/app/shared/components/components-organisms/add-group-flow/add-group-flow.component';
import { CardGroupComponent } from 'src/app/shared/components/card-group/card-group.component';
import { CardAccountGroupComponent } from 'src/app/shared/components/card-account-group/card-account-group.component';
import { EmptyAreasComponent } from 'src/app/shared/components/empty-areas/empty-areas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardAddedGroupComponent } from 'src/app/shared/components/card-added-group/card-added-group.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { CardMethodPaymentComponent } from 'src/app/shared/components/card-method-payment/card-method-payment.component';
import { MessagePaymentComponent } from 'src/app/shared/components/message-payment/message-payment.component';
import { IconGroupComponent } from 'src/app/shared/components/components-atom/icon-group/icon-group.component';

import { RouterTestingModule } from '@angular/router/testing';
import { CuentasService } from 'src/app/shared/services/cuentas.service';
import { CuentasServiceMock } from 'src/app/shared/services/cuentas.service.spec';
import { BusquedasService } from 'src/app/shared/services/busquedas.service';
import { BusquedaServiceMock } from 'src/app/shared/services/busquedas.service.spec';

describe('HomeFacade', () => {
    let component: HomeFacade;
    let fixture: ComponentFixture<HomeFacade>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeFacade,
                HomeComponent,
                CapsuleComponent,
                FooterDefaultComponent,
                PageComponent,
                ModalBenefitsComponent,
                ModalAccountErrorsComponent,
                ModalEditAccountDetailComponent,
                ModalCardDetailComponent,
                ModalClientNumberResultComponent,
                ModalBottomComponent,
                ButtonComponent,
                InputComponent,
                ParagraphComponent,
                ModalTitleComponent,
                CheckboxComponent,
                ActionFooterComponent,
                RegisteredPaymentMethodsComponent,
                AccountGroupComponent,
                CardAccountComponent,
                CardAddedAccountComponent,
                PageTitleComponent,
                BadgeComponent,
                CapsuleComponent,
                HeaderMainComponent,
                LabelComponent,
                SwiperComponent,
                ModalComponent,
                IconComponent,
                ImageComponent,
                RadioComponent,
                CardAccountDetailComponent,
                BackButtonComponent,
                PaymentCardComponent,
                AddGroupFlowComponent,
                CardGroupComponent,
                CardAccountGroupComponent,
                EmptyAreasComponent,
                CardAddedGroupComponent,
                SidebarComponent,
                CardDefaultComponent,
                CardMethodPaymentComponent,
                MessagePaymentComponent,
                IconGroupComponent
            ],
            providers: [
                {provide: ConveniosService, useClass: ConveniosServiceMock },
                {provide: CuentasService, useClass: CuentasServiceMock },
                {provide: BusquedasService, useClass: BusquedaServiceMock }
            ],
            imports: [
                NgbModule,
                RouterTestingModule
              ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeFacade);
        component = fixture.componentInstance;
        component.convenios = [{
            "idConvenio": 101,
            "servicio": "Movistar Hogar",
            "empresa": "Movistar",
            "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg",
            "rubro": {
                "idRubro": 10000,
                "nombreRubro": "Telefonía Hogar",
                "logotipo": "https://ww2.movistar.cl/inc_header_footer_v8/assets/img/logo-movistar.svg"
            }
        },
        {
            "idConvenio": 13511,
            "servicio": "ENOR CHILE",
            "empresa": "Enorchile S.A.",
            "logotipo": "http://enorchile.cl/wp-content/uploads/2018/04/EnorLogo_pantone_en_tarjeta.png",
            "rubro": {
                "idRubro": 20000,
                "nombreRubro": "Eléctrica",
                "logotipo": "http://enorchile.cl/wp-content/uploads/2018/04/EnorLogo_pantone_en_tarjeta.png"
            }
        }];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('metodo buscaConvenio', () => {
        component.buscaConvenio();
    });

    it('metodo filtrar 2 letras', () => {
        component.filtrar('ab');
    });

    it('metodo filtrar 3 letras', () => {
        component.filtrar('abc');
    });

    it('metodo agregarCuenta', () => {
        component.agregarCuenta(101, '10000');
    });

    it('metodo buscarAyudaConvenio', () => {
        component.buscarAyudaConvenio(101);
    });

    it('metodo caracteresEspeciales', () => {
        const event = new KeyboardEvent('keyCode', { code: 'Q', key: 'Q' });
        component.caracteresEspeciales(event);
    });

    it('metodo busquedaAvanzadaIdentificador', () => {
        component.busquedaAvanzadaIdentificador(101);
    });

    it('metodo buscarNumeroCliente', () => {
        component.buscarNumeroCliente(101,'');
    });
})*/