import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsComponent } from './tutorials.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';

describe('TutorialsComponent', () => {
  let component: TutorialsComponent;
  let fixture: ComponentFixture<TutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TutorialsComponent,
        PageTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
