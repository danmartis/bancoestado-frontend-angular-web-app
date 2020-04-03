import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassComponent } from './recover-pass.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RecoverPassComponent', () => {
  let component: RecoverPassComponent;
  let fixture: ComponentFixture<RecoverPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPassComponent ],
      imports: [ComponentsModule, FormsModule,
        ReactiveFormsModule,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
