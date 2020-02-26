import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonthsComponent } from './chart-months.component';

describe('ChartMonthsComponent', () => {
  let component: ChartMonthsComponent;
  let fixture: ComponentFixture<ChartMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMonthsComponent);
    component = fixture.componentInstance;
    
    component.months = [
      {
        name: "bock",
        value:12312,
        accounts:[
          {
            clientNumber: "",
            title: "",
            value: 0,
            uniqueId: 0,
            type: ""
          }
        ]
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMaxValue', () => {
    component.getMaxValue();
  });
});
