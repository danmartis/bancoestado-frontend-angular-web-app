import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainComponent } from './header-main.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonComponent } from '../components-atom/button/button.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderMainComponent', () => {
  let component: HeaderMainComponent;
  let fixture: ComponentFixture<HeaderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        HeaderMainComponent,
        SidebarComponent,
        ButtonComponent,
        CapsuleComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMainComponent);
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
