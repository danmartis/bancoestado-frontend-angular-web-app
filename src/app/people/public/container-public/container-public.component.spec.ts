import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPublicComponent } from './container-public.component';

describe('ContainerPublicComponent', () => {
  let component: ContainerPublicComponent;
  let fixture: ComponentFixture<ContainerPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
