import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { CalltoactionComponent } from 'src/app/shared/components/components-organisms/calltoaction/calltoaction.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ProfileFormComponent } from 'src/app/shared/components/components-organisms/profile-form/profile-form.component';
import { ProfileAvatarComponent } from 'src/app/shared/components/components-organisms/profile-avatar/profile-avatar.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent,
        FooterDefaultComponent,
        PageComponent,
        CalltoactionComponent,
        ParagraphComponent,
        PageComponent,
        ProfileFormComponent,
        ProfileAvatarComponent,
        PageTitleComponent,
        HeaderMainComponent,
        ImageComponent,
        ButtonComponent,
        InputComponent,
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
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
