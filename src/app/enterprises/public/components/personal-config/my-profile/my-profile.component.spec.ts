import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { InfoItemComponent } from '../info-item/info-item.component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileComponent, InfoItemComponent ],
      imports: [ComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
