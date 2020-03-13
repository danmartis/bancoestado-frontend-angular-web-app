import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components-atom/button/button.component';
import { CardAccountComponent } from './card-account/card-account.component';
import { CardDefaultComponent } from './components-atom/card-default/card-default.component';
import { CheckboxComponent } from './components-atom/checkbox/checkbox.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './components-atom/icon/icon.component';
import { InputComponent } from './components-atom/input/input.component';
import { LabelComponent } from './components-atom/label/label.component';
import { MainTitleComponent } from './components-atom/main-title/main-title.component';
import { ModalComponent } from './components-organisms/modal/modal.component';
import { ModalBottomComponent } from './components-organisms/modal-bottom/modal-bottom.component';
import { ModalTitleComponent } from './components-atom/modal-title/modal-title.component';
import { PageTitleComponent } from './components-atom/page-title/page-title.component';
import { ParagraphComponent } from './components-atom/paragraph/paragraph.component';
import { CardMethodPaymentComponent } from './card-method-payment/card-method-payment.component';
import { RadioComponent } from './components-atom/radio/radio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarIconComponent } from './sidebar-icon/sidebar-icon.component';
import { CardAddedAccountComponent } from './card-added-account/card-added-account.component';
import { ActionFooterComponent } from './action-footer/action-footer.component';
import { FooterDefaultComponent } from './footer-default/footer-default.component';
import { BadgeComponent } from './components-atom/badge/badge.component';
import { CardVoucherComponent } from './card-voucher/card-voucher.component';
import { MessagePaymentComponent } from './message-payment/message-payment.component';
import { InfoPaymentComponent } from './info-payment/info-payment.component';
import { DetailsPaymentComponent } from './details-payment/details-payment.component';
import { AccountGroupComponent } from './account-group/account-group.component';
import { CardAccountGroupComponent } from './card-account-group/card-account-group.component';
import { CardAddedGroupComponent } from './card-added-group/card-added-group.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { LinkComponent } from './components-atom/link/link.component';
import { RouterModule } from '@angular/router';
import { StepComponent } from './components-atom/step/step.component';
import { BulletStepComponent } from './bullet-step/bullet-step.component';
import { RegisteredPaymentMethodsComponent } from './registered-payment-methods/registered-payment-methods.component';
import { CardAccountDetailComponent } from './card-account-detail/card-account-detail.component';
import { EmptyAreasComponent } from './empty-areas/empty-areas.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { BackButtonComponent } from './components-atom/back-button/back-button.component';
import { ModalEditAccountDetailComponent } from './components-organisms/modal-edit-account-detail/modal-edit-account-detail.component';
import { ModalCardDetailComponent } from './components-organisms/modal-card-detail/modal-card-detail.component';
import { ModalClientNumberResultComponent } from './components-organisms/modal-client-number-result/modal-client-number-result.component';
import { VoucherGroupComponent } from './components-organisms/voucher-group/voucher-group.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { AddGroupFlowComponent } from './components-organisms/add-group-flow/add-group-flow.component';
import { IconGroupComponent } from './components-atom/icon-group/icon-group.component';
import { PageComponent } from './components-atom/page/page.component';
import { ImageComponent } from './components-atom/image/image.component';
import { ModalBenefitsComponent } from './components-organisms/modal-benefits/modal-benefits.component';
import { PaymentCardComponent } from './components-organisms/payment-card/payment-card.component';
import { LoginFlowComponent } from './components-organisms/login-flow/login-flow.component';
import { ModalAccountErrorsComponent } from './components-organisms/modal-account-errors/modal-account-errors.component';
import { ModalSplashComponent } from './components-organisms/modal-splash/modal-splash.component';
import { TriangleIconDetailComponent } from './components-atom/triangle-icon-detail/triangle-icon-detail.component';
import { ChartMonthsComponent } from './components-atom/chart-months/chart-months.component';
import { NonRegisteredFlowComponent } from './components-organisms/non-registered-flow/non-registered-flow.component';
import { BackButtonPageComponent } from './components-atom/back-button-page/back-button-page.component';
import { ModalErrorDefaultComponent } from './components-organisms/modal-error-default/modal-error-default.component';
import { LoginFlowSeComponent } from './components-organisms/login-flow-se/login-flow-se.component';
import { LoginFlowBeComponent } from './components-organisms/login-flow-be/login-flow-be.component';
import { CardPageComponent } from './components-atom/card-page/card-page.component';
import { ProfileAvatarComponent } from './components-organisms/profile-avatar/profile-avatar.component';
import { ProfileFormComponent } from './components-organisms/profile-form/profile-form.component';
import { ShowMoreComponent } from './components-atom/show-more/show-more.component';
import { TextareaComponent } from './components-atom/textarea/textarea.component';
import { CalltoactionComponent } from './components-organisms/calltoaction/calltoaction.component';
import { CardAccountHistoryComponent } from './accounts/card-account-history/card-account-history.component';
import { CardAccountTypeAComponent } from './accounts/card-account-type-a/card-account-type-a.component';
import { CardAccountTypeBComponent } from './accounts/card-account-type-b/card-account-type-b.component';
import { CardAccountHistoryGroupComponent } from './accounts/card-account-history-group/card-account-history-group.component'
import { CardAccountDetailComponentNew } from './accounts/card-account-detail-new/card-account-detail-new.component'

import { Button2Component } from './button/button2/button2.component';
import { GraphDisplayValueComponent } from './graph-display-value/graph-display-value.component';
import { ModalIconComponent } from './modal-icon/modal-icon.component';
import { CardRegisterSuccessComponent } from './card-register-success/card-register-success.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SelectSeComponent } from './components-atom/select-se/select-se.component';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { HelpPrefooterComponent } from './help-prefooter/help-prefooter.component';
import { ColoredLineComponent } from './components-atom/colored-line/colored-line.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { RutMaskDirective } from 'src/app/enterprises/public/directives/rut-format.directive'
@NgModule({
  declarations: [ButtonComponent, CardAccountComponent,
    CardDefaultComponent, CheckboxComponent,
    HeaderComponent, IconComponent, InputComponent,
    LabelComponent, MainTitleComponent, ModalComponent,
    ModalBottomComponent, ModalTitleComponent, PageTitleComponent, ParagraphComponent,
    CardMethodPaymentComponent, RadioComponent, SidebarComponent, SidebarIconComponent,
    CardAddedAccountComponent, ActionFooterComponent, FooterDefaultComponent, BadgeComponent, CardVoucherComponent,
    MessagePaymentComponent, InfoPaymentComponent, DetailsPaymentComponent, AccountGroupComponent,
    CardAccountGroupComponent, CardAddedGroupComponent, CardGroupComponent, LinkComponent,
    StepComponent, BulletStepComponent, RegisteredPaymentMethodsComponent, CardAccountDetailComponent, EmptyAreasComponent,
    CapsuleComponent, BackButtonComponent, ModalEditAccountDetailComponent, ModalCardDetailComponent, ModalClientNumberResultComponent,
    VoucherGroupComponent, HeaderMainComponent, AddGroupFlowComponent, IconGroupComponent, PageComponent, ImageComponent, ModalBenefitsComponent,
    PaymentCardComponent, LoginFlowComponent, ModalAccountErrorsComponent, ModalSplashComponent, TriangleIconDetailComponent, ChartMonthsComponent,
    NonRegisteredFlowComponent, BackButtonPageComponent,
    ModalErrorDefaultComponent, LoginFlowSeComponent, LoginFlowBeComponent, CardPageComponent, ProfileAvatarComponent, ProfileFormComponent,
    ShowMoreComponent, TextareaComponent, CalltoactionComponent,
    CardAccountHistoryComponent,
    CardAccountTypeAComponent, CardAccountTypeBComponent, CardAccountDetailComponentNew,
    CardAccountHistoryGroupComponent, Button2Component, GraphDisplayValueComponent, ModalIconComponent, CardRegisterSuccessComponent, DropdownComponent, SelectSeComponent, HelpPrefooterComponent, 
    ColoredLineComponent, TopBarComponent, HeaderLandingComponent, CardPageComponent, RutMaskDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    DropdownComponent,
    ModalIconComponent, CardRegisterSuccessComponent,
    CardAccountDetailComponentNew,
    GraphDisplayValueComponent,
    Button2Component,
    CardAccountHistoryComponent,
    CardAccountTypeAComponent, CardAccountTypeBComponent,
    CardAccountHistoryGroupComponent,
    TextareaComponent, CalltoactionComponent,
    ProfileAvatarComponent, ProfileFormComponent, ShowMoreComponent,
    LoginFlowBeComponent, LoginFlowSeComponent,
    BackButtonPageComponent, ModalErrorDefaultComponent,
    NonRegisteredFlowComponent, ChartMonthsComponent, TriangleIconDetailComponent,
    ModalSplashComponent, ModalAccountErrorsComponent, LoginFlowComponent,
    ModalBenefitsComponent, ImageComponent, PageComponent, VoucherGroupComponent,
    ModalClientNumberResultComponent, ModalCardDetailComponent, ModalEditAccountDetailComponent,
    CardAccountDetailComponent, RegisteredPaymentMethodsComponent, BulletStepComponent,
    StepComponent, LinkComponent, AccountGroupComponent, BadgeComponent, FooterDefaultComponent,
    ActionFooterComponent, CardAddedAccountComponent, ButtonComponent, CardAccountComponent,
    CardDefaultComponent, CheckboxComponent, HeaderComponent, IconComponent, InputComponent,
    LabelComponent, MainTitleComponent, ModalComponent, ModalBottomComponent,
    ModalTitleComponent, PageTitleComponent, ParagraphComponent, CardMethodPaymentComponent,
    RadioComponent, CardVoucherComponent, MessagePaymentComponent, InfoPaymentComponent,
    DetailsPaymentComponent, EmptyAreasComponent, CapsuleComponent, HeaderMainComponent, SelectSeComponent, NgxTinySliderModule,
    HelpPrefooterComponent, ColoredLineComponent, TopBarComponent, HeaderLandingComponent,
    CardPageComponent, RutMaskDirective
  ],
})
export class ComponentsModule { }


