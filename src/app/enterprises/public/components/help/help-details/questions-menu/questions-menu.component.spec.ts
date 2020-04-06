import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsMenuComponent } from './questions-menu.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('QuestionsMenuComponent', () => {
  let component: QuestionsMenuComponent;
  let fixture: ComponentFixture<QuestionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsMenuComponent ],
      imports: [ComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsMenuComponent);
    component = fixture.componentInstance;
    component.item = {
      'icon' : '',
      'category' :'' 
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
