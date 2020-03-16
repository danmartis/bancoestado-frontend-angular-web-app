import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessComponent } from './register-success.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CardRegisterSuccessComponent } from 'src/app/shared/components/card-register-success/card-register-success.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterSuccessComponent', () => {
  let component: RegisterSuccessComponent;
  let fixture: ComponentFixture<RegisterSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        RegisterSuccessComponent,
        FooterDefaultComponent,
        PageComponent,
        CardRegisterSuccessComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        Button2Component,
        ParagraphComponent,
        ModalTitleComponent,
        CapsuleComponent,
        ModalIconComponent,
        ButtonComponent,
        IconComponent,
        SidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
