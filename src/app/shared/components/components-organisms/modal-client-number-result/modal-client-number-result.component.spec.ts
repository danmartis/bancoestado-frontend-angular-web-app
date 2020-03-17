import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientNumberResultComponent } from './modal-client-number-result.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { Button2Component } from '../../button/button2/button2.component';

describe('ModalClientNumberResultComponent', () => {
  let component: ModalClientNumberResultComponent;
  let fixture: ComponentFixture<ModalClientNumberResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalClientNumberResultComponent,
        ModalComponent,
        ButtonComponent,
        IconComponent,
        ParagraphComponent,
        Button2Component
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClientNumberResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getClientNumber', () => {
    component.getClientNumber();
  });

  it('getText', () => {
    component.getText();
  });
});
