import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMethodPaymentComponent } from './card-method-payment.component';
import { RadioComponent } from '../components-atom/radio/radio.component';
import { ImageComponent } from '../components-atom/image/image.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { PaymentMethodType } from 'src/app/shared/utils/options';
import { Button2Component } from '../button/button2/button2.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CardMethodPaymentComponent', () => {
  let component: CardMethodPaymentComponent;
  let fixture: ComponentFixture<CardMethodPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [ 
        CardMethodPaymentComponent,
        RadioComponent,
        ImageComponent,
        ButtonComponent,
        IconComponent,
        Button2Component,
        DropdownComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMethodPaymentComponent);
    component = fixture.componentInstance;
    component.method = {
      number: '123',
      type: PaymentMethodType.BancoEstado,
      primary: true,
      bank: 'BECH'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getIconColorContextMenu', () => {
    component.getIconColorContextMenu();
  });

  it('isCompanyMethod', () => {
    component.isCompanyMethod();
  });

});
