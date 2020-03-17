import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegisterSuccessComponent } from './card-register-success.component';
import { Button2Component } from '../button/button2/button2.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { ParagraphComponent } from '../components-atom/paragraph/paragraph.component';
import { ModalIconComponent } from '../modal-icon/modal-icon.component';
import { ModalTitleComponent } from '../components-atom/modal-title/modal-title.component';
import { ButtonComponent } from '../components-atom/button/button.component';

describe('CardRegisterSuccessComponent', () => {
  let component: CardRegisterSuccessComponent;
  let fixture: ComponentFixture<CardRegisterSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardRegisterSuccessComponent,
        Button2Component,
        CapsuleComponent,
        ParagraphComponent,
        ModalIconComponent,
        ModalTitleComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
