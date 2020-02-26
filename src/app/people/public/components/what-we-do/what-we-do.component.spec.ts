import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoComponent } from './what-we-do.component';
import { PageTitleComponent } from 'src/app/components/components-atom/page-title/page-title.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { ProfileAvatarComponent } from 'src/app/components/components-organisms/profile-avatar/profile-avatar.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { CalltoactionComponent } from 'src/app/components/components-organisms/calltoaction/calltoaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
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
