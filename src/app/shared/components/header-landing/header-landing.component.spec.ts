import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLandingComponent } from './header-landing.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { Button2Component } from '../button/button2/button2.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderLandingComponent', () => {
  let component: HeaderLandingComponent;
  let fixture: ComponentFixture<HeaderLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderLandingComponent,
        SidebarComponent,
        TopBarComponent,
        CapsuleComponent,
        Button2Component,
        ButtonComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
