import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonPageComponent } from './back-button-page.component';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

describe('BackButtonPageComponent', () => {
  let component: BackButtonPageComponent;
  let fixture: ComponentFixture<BackButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BackButtonPageComponent,
        ButtonComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
