import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComponent } from './help.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { CalltoactionComponent } from 'src/app/components/components-organisms/calltoaction/calltoaction.component';
import { PageTitleComponent } from 'src/app/components/components-atom/page-title/page-title.component';
import { InputComponent } from 'src/app/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

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
        CapsuleComponent
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
