import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { LabelComponent } from 'src/app/shared/components/components-atom/label/label.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RegisterComponent,
        PageComponent,
        LabelComponent,
        ModalComponent,
        LinkComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
