import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSeComponent } from './login-se.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { LoginFlowSeComponent } from 'src/app/shared/components/components-organisms/login-flow-se/login-flow-se.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { CardPageComponent } from 'src/app/shared/components/components-atom/card-page/card-page.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('LoginSeComponent', () => {
  let component: LoginSeComponent;
  let fixture: ComponentFixture<LoginSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginSeComponent,
        PageComponent,
        FooterDefaultComponent,
        LoginFlowSeComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        ModalComponent,
        ButtonComponent,
        CapsuleComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        InputComponent,
        CardPageComponent,
        IconComponent,
        SidebarComponent,
        ModalIconComponent,
        Button2Component
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const originalNavigate = TestBed.get(Router).navigate;
    spyOn(TestBed.get(Router), 'navigate').and.callFake((...options) => {
      fixture.ngZone.run(() => {
        originalNavigate.apply(TestBed.get(Router), options);
      });
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test goToHome', () => {
    expect(component.goToHome()).toBe();
  });
});
