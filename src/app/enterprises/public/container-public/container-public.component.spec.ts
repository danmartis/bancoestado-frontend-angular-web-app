import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPublicComponent } from './container-public.component';
import { HeaderLandingComponent } from 'src/app/shared/components/header-landing/header-landing.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ComponentsModule } from 'src/app/shared/components/components.module';


describe('ContainerPublicComponent', () => {
  let component: ContainerPublicComponent;
  let fixture: ComponentFixture<ContainerPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentsModule
      ],
      declarations: [ 
        ContainerPublicComponent
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
