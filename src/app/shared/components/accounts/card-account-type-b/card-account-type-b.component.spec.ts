import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountTypeBComponent } from './card-account-type-b.component';
import { CheckboxComponent } from '../../components-atom/checkbox/checkbox.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CardAccountTypeBComponent', () => {
  let component: CardAccountTypeBComponent;
  let fixture: ComponentFixture<CardAccountTypeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [ 
        CardAccountTypeBComponent,
        CheckboxComponent,
        DropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
