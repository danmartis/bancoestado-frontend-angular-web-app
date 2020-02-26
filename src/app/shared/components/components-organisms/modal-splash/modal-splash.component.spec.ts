import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSplashComponent } from './modal-splash.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';

describe('ModalSplashComponent', () => {
  let component: ModalSplashComponent;
  let fixture: ComponentFixture<ModalSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalSplashComponent,
        BackButtonComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('backAction', () => {
    component.backAction();
  });
});
