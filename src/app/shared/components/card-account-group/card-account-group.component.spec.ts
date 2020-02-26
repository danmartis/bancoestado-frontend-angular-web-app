import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountGroupComponent } from './card-account-group.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { CheckboxComponent } from '../components-atom/checkbox/checkbox.component';
import { ParagraphComponent } from '../components-atom/paragraph/paragraph.component';

describe('CardAccountGroupComponent', () => {
  let component: CardAccountGroupComponent;
  let fixture: ComponentFixture<CardAccountGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardAccountGroupComponent,
        IconComponent,
        CheckboxComponent,
        ParagraphComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountGroupComponent);
    component = fixture.componentInstance;
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: "",
      selected:true,
      group:"",
      status:"success"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getColorAccount', () => {
    component.getColorAccount();
  });

  it('getIcon', () => {
    component.getIcon();
  });

  it('getColor', () => {
    component.getColor();
  });

  it('handlerClick', () => {
    component.handlerClick();
  });
  
  it('toggleOptionsStatus', () => {
    component.toggleOptionsStatus();
  });

  it('getColor error', () => {
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: "",
      selected:true,
      group:"",
      status:"error"
    };
    component.getColor();
  });

  it('getColor warning', () => {
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: "",
      selected:true,
      group:"",
      status:"warning"
    };
    component.getColor();
  });

  it('getColor', () => {
    component.account = {
      clientNumber: "",
      title: "",
      value: 0,
      uniqueId: 0,
      type: "",
      selected:true,
      group:"",
      status:""
    };
    component.getColor();
  });
});
