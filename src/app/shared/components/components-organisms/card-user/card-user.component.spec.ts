import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserComponent } from './card-user.component';
import { ComponentsModule } from '../../components.module';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUserComponent, CardDefaultComponent ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
