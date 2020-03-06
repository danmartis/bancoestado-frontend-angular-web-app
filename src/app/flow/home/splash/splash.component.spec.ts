import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashComponent } from './splash.component';
import { ModalSplashComponent } from 'src/app/shared/components/components-organisms/modal-splash/modal-splash.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { BulletStepComponent } from 'src/app/shared/components/bullet-step/bullet-step.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { BackButtonComponent } from 'src/app/shared/components/components-atom/back-button/back-button.component';

describe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SplashComponent,
        ModalSplashComponent,
        ButtonComponent,
        ParagraphComponent,
        BulletStepComponent,
        ImageComponent,
        IconComponent,
        BackButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setStep', () => {
    component.setStep(1);
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
  });

});
