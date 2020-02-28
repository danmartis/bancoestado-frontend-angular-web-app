import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPrefooterComponent } from './help-prefooter.component';

describe('HelpPrefooterComponent', () => {
  let component: HelpPrefooterComponent;
  let fixture: ComponentFixture<HelpPrefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPrefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPrefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
