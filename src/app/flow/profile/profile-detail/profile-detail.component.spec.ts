import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailComponent } from './profile-detail.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ProfileFormComponent } from 'src/app/shared/components/components-organisms/profile-form/profile-form.component';
import { ProfileAvatarComponent } from 'src/app/shared/components/components-organisms/profile-avatar/profile-avatar.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { SelectSeComponent } from 'src/app/shared/components/components-atom/select-se/select-se.component';

describe('ProfileDetailComponent', () => {
  let component: ProfileDetailComponent;
  let fixture: ComponentFixture<ProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProfileDetailComponent,
        PageComponent,
        ProfileFormComponent,
        ProfileAvatarComponent,
        ButtonComponent,
        PageTitleComponent,
        HeaderMainComponent,
        InputComponent,
        ParagraphComponent,
        ImageComponent,
        SidebarComponent,
        CapsuleComponent,
        FooterDefaultComponent,
        Button2Component,
        SelectSeComponent
      ],
      imports: [
        NgbModule,
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test toggleMode', () => {
    expect(component.toggleMode()).not.toBeNull();
  });
});
