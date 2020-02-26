import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDisplayValueComponent } from './graph-display-value.component';

describe('GraphDisplayValueComponent', () => {
  let component: GraphDisplayValueComponent;
  let fixture: ComponentFixture<GraphDisplayValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDisplayValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDisplayValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
