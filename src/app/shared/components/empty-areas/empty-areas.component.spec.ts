import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyAreasComponent } from './empty-areas.component';

describe('EmptyAreasComponent', () => {
  let component: EmptyAreasComponent;
  let fixture: ComponentFixture<EmptyAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
