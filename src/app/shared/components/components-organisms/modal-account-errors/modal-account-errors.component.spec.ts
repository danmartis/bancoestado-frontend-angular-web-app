import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountErrorsComponent } from './modal-account-errors.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { Button2Component } from '../../button/button2/button2.component';

describe('ModalAccountErrorsComponent', () => {
  let component: ModalAccountErrorsComponent;
  let fixture: ComponentFixture<ModalAccountErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalAccountErrorsComponent,
        ModalBottomComponent,
        ButtonComponent,
        ParagraphComponent,
        ModalTitleComponent,
        IconComponent,
        BackButtonComponent,
        Button2Component
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccountErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
    expect(component).toBeTruthy();
  });
});
