import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleComponent } from './capsule.component';
import { ButtonComponent } from '../components-atom/button/button.component';

describe('CapsuleComponent', () => {
  let component: CapsuleComponent;
  let fixture: ComponentFixture<CapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CapsuleComponent,
        ButtonComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closeListOpenSingle', () => {
    const closeList = ["modal-added-account"];
    const open = 'modal-client-number';
    component.closeListOpenSingle(closeList,open);
    expect(component).toBeTruthy();
  });
});
