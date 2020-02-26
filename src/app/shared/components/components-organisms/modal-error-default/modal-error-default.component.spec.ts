import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorDefaultComponent } from './modal-error-default.component';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { IconComponent } from '../../components-atom/icon/icon.component';

describe('ModalErrorDefaultComponent', () => {
  let component: ModalErrorDefaultComponent;
  let fixture: ComponentFixture<ModalErrorDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalErrorDefaultComponent,
        ModalComponent,
        ButtonComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrorDefaultComponent);
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
