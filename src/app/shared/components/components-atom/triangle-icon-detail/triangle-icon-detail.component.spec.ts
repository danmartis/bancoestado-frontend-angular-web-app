import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleIconDetailComponent } from './triangle-icon-detail.component';

describe('TriangleIconDetailComponent', () => {
  let component: TriangleIconDetailComponent;
  let fixture: ComponentFixture<TriangleIconDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleIconDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleIconDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
