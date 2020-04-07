import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountComponent } from './card-account.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CardAccountComponent', () => {
  let component: CardAccountComponent;
  let fixture: ComponentFixture<CardAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        NgbModule
      ],
      declarations: [ 
        CardAccountComponent,
        IconComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountComponent);
    component = fixture.componentInstance;
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: ""
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getType', () => {
    component.account.type = 'tc';
    expect(component.getType()).toEqual('card-account--tc');
  });

  it('formatNumber', () => {
    expect(component.formatNumber(1231)).toEqual('$1.231');
  });

  it('toggleOptionsStatus() - true', () => {
    component.optionStatus = true;
    component.toggleOptionsStatus();
    expect(component.optionStatus).toBeFalsy();
  });

  it('toggleOptionsStatus() - false', () => {
    component.optionStatus = false;
    component.toggleOptionsStatus();
    expect(component.optionStatus).toBeTruthy();
  });

  it('getOptionsStatus()', () => {
    expect(component.getOptionsStatus()).toEqual('card-account__options--close');
  });

  it('getOptionsStatus() - optionStatus true', () => {
    component.optionStatus = true;
    expect(component.getOptionsStatus()).toEqual('card-account__options--open');
  });

  it('removeCard', () => {
    spyOn(component.close, 'emit');
    component.removeCard();
    expect(component.close.emit).toHaveBeenCalledWith(null);
  });

  it('showDetailOpen - llama al evento', () => {
    const event = {
      target: {
        parent: {}
      },
    }
    component.account.fullPayment = 1000;
    component.account.expirePayment = 10;
    spyOn(component.showDetail, 'emit');
    component.showDetailOpen(event);
    expect(component.showDetail.emit).toHaveBeenCalled();
  });

  it('showDetailOpen - no llama al evento', () => {
    const event = {
      target: {
        parent: {}
      },
    }
    component.account.fullPayment = 0;
    component.account.expirePayment = 0;
    spyOn(component.showDetail, 'emit');
    component.showDetailOpen(event);
    expect(component.showDetail.emit).toHaveBeenCalledTimes(0);
  });

  it('showDetailAccount', () => {
    spyOn(component.showDetail, 'emit');
    component.showDetailAccount();
    expect(component.showDetail.emit).toHaveBeenCalledWith(component.account);
  });

  it('getIcon', () => {
    component.account.group = 'default';
    expect(component.getIcon()).toEqual('assets/imgs/icons/call-answer-white.svg');
  });

  it('getColorAccount', () => {
    component.account.group = 'default';
    expect(component.getColorAccount()).toEqual('#042c5c');
  });

  it('getColorAccount - con type', () => {
    component.account.type = 'electrical';
    expect(component.getColorAccount()).toEqual('rgb(255, 184, 66)');
  });

  it('closeContextMenu', () => {
    component.optionStatus = true;
    const event = {
      target: 'type'
    }
    component.closeContextMenu(event);
    expect(component.optionStatus).toBeFalsy();
  });

});
