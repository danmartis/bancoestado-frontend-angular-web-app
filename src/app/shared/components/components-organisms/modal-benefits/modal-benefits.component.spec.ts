import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBenefitsComponent } from './modal-benefits.component';
import { ModalComponent } from '../modal/modal.component';
import { ParagraphComponent } from '../../components-atom/paragraph/paragraph.component';
import { IconComponent } from '../../components-atom/icon/icon.component';
import { ModalTitleComponent } from '../../components-atom/modal-title/modal-title.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { ImageComponent } from '../../components-atom/image/image.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Button2Component } from '../../button/button2/button2.component';

describe('ModalBenefitsComponent', () => {
  let component: ModalBenefitsComponent;
  let fixture: ComponentFixture<ModalBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalBenefitsComponent,
        ModalComponent,
        ParagraphComponent,
        IconComponent,
        ModalTitleComponent,
        ButtonComponent,
        ImageComponent,
        Button2Component
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBenefitsComponent);
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
