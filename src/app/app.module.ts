import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './flow/home/home/home.component';
import { AdvanceSearchComponent } from './flow/home/advance-search/advance-search.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SandboxComponent } from './flow/mock/sandbox/sandbox.component';
import { PaymentMethodComponent } from './flow/payment/payment-method/payment-method.component';
import { ProofPaymentComponent } from './flow/payment/proof-payment/proof-payment.component';
import { NotFoundComponent } from './flow/status/not-found/not-found.component';
import { SplashComponent } from './flow/home/splash/splash.component';
import { ProofPaymentGroupComponent } from './flow/payment/proof-payment-group/proof-payment-group.component';
import { PaymentsComponent } from './flow/history/payments/payments.component';
import { PaymentSelectComponent } from './flow/payment/payment-select/payment-select.component';
import { PaymentEnrollComponent } from './flow/payment/payment-enroll/payment-enroll.component';
import { LoginSeComponent } from './flow/login/login-se/login-se.component';
import { LoginBeComponent } from './flow/login/login-be/login-be.component';
import { ProfileDetailComponent } from './flow/profile/profile-detail/profile-detail.component';
import { PaymentVoucherComponent } from './flow/history/payment-voucher/payment-voucher.component';
import { ContactComponent } from './flow/profile/contact/contact.component';

// modificaciones
import { HttpClientModule } from '@angular/common/http';

import { BusquedasService } from './services/busquedas.service';
import { ConveniosService } from './services/convenios.service';
import { CuentasService } from './services/cuentas.service';
import { ParametroService } from '../app/domain/parametro.service';
import { ComprobanteService } from './services/comprobante.service';
import { RegistroSeService } from './services/registro-se.service';
import { SharedModule } from './shared/shared.module';
import { EnterprisesModule } from './enterprises/enterprises.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvanceSearchComponent,
    SandboxComponent,
    PaymentMethodComponent,
    ProofPaymentComponent,
    NotFoundComponent,
    SplashComponent,
    ProofPaymentGroupComponent,
    PaymentsComponent,
    PaymentSelectComponent,
    PaymentEnrollComponent,
    LoginSeComponent,
    LoginBeComponent,
    ProfileDetailComponent,
    PaymentVoucherComponent,
    ContactComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    NgbModule,
    EnterprisesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTinySliderModule,
    SharedModule,
  ],
  providers: [BusquedasService, ConveniosService, CuentasService, ParametroService, ComprobanteService, RegistroSeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
