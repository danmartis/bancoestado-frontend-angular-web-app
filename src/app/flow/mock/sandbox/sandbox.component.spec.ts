import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxComponent } from './sandbox.component';
import { ModalErrorDefaultComponent } from 'src/app/components/components-organisms/modal-error-default/modal-error-default.component';
import { ActionFooterComponent } from 'src/app/components/action-footer/action-footer.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/components/components-atom/page-title/page-title.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { EmptyAreasComponent } from 'src/app/components/empty-areas/empty-areas.component';
import { CardDefaultComponent } from 'src/app/components/components-atom/card-default/card-default.component';
import { IconComponent } from 'src/app/components/components-atom/icon/icon.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { ModalComponent } from 'src/app/components/components-organisms/modal/modal.component';
import { ModalTitleComponent } from 'src/app/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CheckboxComponent } from 'src/app/components/components-atom/checkbox/checkbox.component';
import { RouterTestingModule } from '@angular/router/testing';

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
        CheckboxComponent
      ],
      imports: [
        RouterTestingModule
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
  });

});
