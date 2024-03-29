import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Button2Component } from '../button/button2/button2.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        SidebarComponent,
        CapsuleComponent,
        ButtonComponent,
        Button2Component
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getStatusCss', () => {
    component.getStatusCss();
  });

});
