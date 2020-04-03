import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassComponent } from './recover-pass.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecoverPassComponent', () => {
  let component: RecoverPassComponent;
  let fixture: ComponentFixture<RecoverPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPassComponent ],
      imports: [ComponentsModule, FormsModule, 
        RouterTestingModule,
        ReactiveFormsModule, 
        HttpClientTestingModule]
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
