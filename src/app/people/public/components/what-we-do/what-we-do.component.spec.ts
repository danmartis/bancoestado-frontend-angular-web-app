import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoComponent } from './what-we-do.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { ProfileAvatarComponent } from 'src/app/shared/components/components-organisms/profile-avatar/profile-avatar.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { CalltoactionComponent } from 'src/app/shared/components/components-organisms/calltoaction/calltoaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WhatWeDoComponent', () => {
  let component: WhatWeDoComponent;
  let fixture: ComponentFixture<WhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WhatWeDoComponent,
        PageTitleComponent,
        HeaderMainComponent,
        ProfileAvatarComponent,
        ButtonComponent,
        PageComponent,
        FooterDefaultComponent,
        ParagraphComponent,
        ImageComponent,
        CalltoactionComponent,
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
    fixture = TestBed.createComponent(WhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
