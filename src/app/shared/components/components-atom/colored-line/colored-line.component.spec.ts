import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredLineComponent } from './colored-line.component';

describe('ColoredLineComponent', () => {
  let component: ColoredLineComponent;
  let fixture: ComponentFixture<ColoredLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
