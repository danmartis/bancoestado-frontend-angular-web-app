import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { LinkComponent } from 'src/app/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LandingComponent,
        FooterDefaultComponent,
        LinkComponent,
        ParagraphComponent,
        HeaderMainComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});