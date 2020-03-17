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

  it('formatNumber', () => {
    component.formatNumber(1231);
  });

  it('toggleOptionsStatus', () => {
    component.toggleOptionsStatus();
  });

  it('getOptionsStatus', () => {
    component.getOptionsStatus();
  });

  it('removeCard', () => {
    component.removeCard();
  });

  it('getIcon', () => {
    component.getIcon();
  });

  it('getColorAccount', () => {
    component.getColorAccount();
  });
  
  /*it('showDetailOpen', () => {
    component.showDetailOpen();
  });*/

  it('closeContextMenu', () => {
    const event = {
      target: 'type'
    }
    component.closeContextMenu(event);
  });

  it('showDetailOpen', () => {
    const event = {
      target: 'parent'
    }
    component.showDetailOpen(event);
  });

});
