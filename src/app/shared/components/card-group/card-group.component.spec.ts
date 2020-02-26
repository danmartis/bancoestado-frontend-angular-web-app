import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupComponent } from './card-group.component';
import { IconComponent } from '../components-atom/icon/icon.component';
import { IconGroupComponent } from '../components-atom/icon-group/icon-group.component';
import { CheckboxComponent } from '../components-atom/checkbox/checkbox.component';
import { ParagraphComponent } from '../components-atom/paragraph/paragraph.component';

describe('CardGroupComponent', () => {
  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardGroupComponent,
        IconComponent,
        IconGroupComponent,
        CheckboxComponent,
        ParagraphComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupComponent);
    component = fixture.componentInstance;
    component.group = {
      icon : "",
      status:"success"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getColor', () => {
    component.getColor();
  });

  it('getColor error', () => {
    component.group = {
      icon : "",
      status:"error"
    };
    component.getColor();
  });

  it('getColor warning', () => {
    component.group = {
      icon : "",
      status:"warning"
    };
    component.getColor();
  });

  it('getColor null', () => {
    component.group = {
      icon : "",
      status:""
    };
    component.getColor();
  });
});
