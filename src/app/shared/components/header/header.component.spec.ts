import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Button2Component } from '../button/button2/button2.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        SidebarComponent,
        ButtonComponent,
        CapsuleComponent,
        Button2Component
       ],
       imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleSidebarStatus', () => {
    component.toggleSidebarStatus();
  });
  
  it('getSidebarStatus', () => {
    component.getSidebarStatus();
  });

});
