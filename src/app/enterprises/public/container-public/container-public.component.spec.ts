import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPublicComponent } from './container-public.component';
import { HeaderLandingComponent } from 'src/app/shared/components/header-landing/header-landing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';


describe('ContainerPublicComponent', () => {
  let component: ContainerPublicComponent;
  let fixture: ComponentFixture<ContainerPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ContainerPublicComponent,
        HeaderLandingComponent,
        SidebarComponent,
        TopBarComponent,
        CapsuleComponent,
        Button2Component,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
