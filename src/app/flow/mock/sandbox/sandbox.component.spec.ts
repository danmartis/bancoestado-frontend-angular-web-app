import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxComponent } from './sandbox.component';
import { ModalErrorDefaultComponent } from 'src/app/shared/components/components-organisms/modal-error-default/modal-error-default.component';
import { ActionFooterComponent } from 'src/app/shared/components/action-footer/action-footer.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { EmptyAreasComponent } from 'src/app/shared/components/empty-areas/empty-areas.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { SelectSeComponent } from 'src/app/shared/components/components-atom/select-se/select-se.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { CardAccountTypeBComponent } from 'src/app/shared/components/accounts/card-account-type-b/card-account-type-b.component';
import { CardAccountTypeAComponent } from 'src/app/shared/components/accounts/card-account-type-a/card-account-type-a.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('SandboxComponent', () => {
  let component: SandboxComponent;
  let fixture: ComponentFixture<SandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SandboxComponent,
        ModalErrorDefaultComponent,
        ActionFooterComponent,
        ButtonComponent,
        PageComponent,
        ParagraphComponent,
        PageTitleComponent,
        CapsuleComponent,
        EmptyAreasComponent,
        CardDefaultComponent,
        IconComponent,
        HeaderMainComponent,
        ModalComponent,
        ModalTitleComponent,
        ImageComponent,
        SidebarComponent,
        CheckboxComponent,
        Button2Component,
        SelectSeComponent,
        FooterDefaultComponent,
        ModalIconComponent,
        InputComponent,
        CardAccountTypeBComponent,
        CardAccountTypeAComponent,
        DropdownComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login', () => {
    component.login();
  });

  it('logout', () => {
    component.logout();
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
    expect(component).toBeTruthy();
  });

  it('handlerChangeSearch', () => {
    const data = {};
    component.handlerChangeSearch(data);
  });

  it('onClick', () => {
    component.onClick();
  });

});
