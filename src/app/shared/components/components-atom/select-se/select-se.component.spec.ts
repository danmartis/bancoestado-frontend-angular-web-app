import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeComponent } from './select-se.component';

describe('SelectSeComponent', () => {
  let component: SelectSeComponent;
  let fixture: ComponentFixture<SelectSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick', () => {
    component.onClick();
    expect(component).toBeTruthy();
  });

  it('selectOption', () => {
    const item = {
      label: '',
      sufix:''
    }
    component.selectOption(item);

    expect(component).toBeTruthy();
  });
});
