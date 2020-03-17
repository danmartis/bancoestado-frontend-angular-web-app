import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsComponent } from './tutorials.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';

describe('TutorialsComponent', () => {
  let component: TutorialsComponent;
  let fixture: ComponentFixture<TutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TutorialsComponent,
        PageTitleComponent,
        Button2Component,
        ModalComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
