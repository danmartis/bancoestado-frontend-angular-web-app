import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComponent } from './help.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CalltoactionComponent } from 'src/app/shared/components/components-organisms/calltoaction/calltoaction.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { HelpPrefooterComponent } from 'src/app/shared/components/help-prefooter/help-prefooter.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HelpComponent,
        FooterDefaultComponent,
        PageComponent,
        CalltoactionComponent,
        PageTitleComponent,
        InputComponent,
        ParagraphComponent,
        ImageComponent,
        HeaderMainComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent,
        ModalComponent,
        HelpPrefooterComponent,
        Button2Component,
        TutorialsComponent,
        IconComponent
      ],
      imports: [
        NgbModule,
        FormsModule,
        NgxTinySliderModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
