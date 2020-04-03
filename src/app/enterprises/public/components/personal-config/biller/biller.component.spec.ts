import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerComponent } from './biller.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoItemComponent } from '../info-item/info-item.component';

describe('BillersComponent', () => {
  let component: BillerComponent;
  let fixture: ComponentFixture<BillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerComponent, InfoItemComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
