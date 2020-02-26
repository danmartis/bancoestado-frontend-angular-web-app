import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletStepComponent } from './bullet-step.component';

describe('BulletStepComponent', () => {
  let component: BulletStepComponent;
  let fixture: ComponentFixture<BulletStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getArray', () => {
    component.getArray();
  });

  it('isCurrent', () => {
    component.isCurrent(1);
  });

});
