import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAccountDetailComponent } from './modal-edit-account-detail.component';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { InputComponent } from '../../components-atom/input/input.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';

describe('ModalEditAccountDetailComponent', () => {
  let component: ModalEditAccountDetailComponent;
  let fixture: ComponentFixture<ModalEditAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalEditAccountDetailComponent,
        ModalBottomComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent,
        ModalTitleComponent,
        BackButtonComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAccountDetailComponent);
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
  });
});
