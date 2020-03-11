import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { TextareaComponent } from 'src/app/shared/components/components-atom/textarea/textarea.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { SelectSeComponent } from 'src/app/shared/components/components-atom/select-se/select-se.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ContactComponent,
        PageComponent,
        CardDefaultComponent,
        ImageComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ButtonComponent,
        TextareaComponent,
        InputComponent,
        ModalTitleComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        IconComponent,
        SidebarComponent,
        CapsuleComponent,
        FooterDefaultComponent,
        ModalComponent,
        Button2Component,
        ModalIconComponent,
        SelectSeComponent,
        PageTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
