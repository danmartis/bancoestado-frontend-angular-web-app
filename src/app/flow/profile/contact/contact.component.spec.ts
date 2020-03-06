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
        CapsuleComponent
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
