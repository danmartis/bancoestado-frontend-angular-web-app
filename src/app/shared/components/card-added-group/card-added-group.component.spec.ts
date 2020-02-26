import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddedGroupComponent } from './card-added-group.component';
import { IconComponent } from '../components-atom/icon/icon.component';

describe('CardAddedGroupComponent', () => {
  let component: CardAddedGroupComponent;
  let fixture: ComponentFixture<CardAddedGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardAddedGroupComponent,
        IconComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
