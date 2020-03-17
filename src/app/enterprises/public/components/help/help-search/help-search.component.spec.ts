import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSearchComponent } from './help-search.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';

describe('HelpSearchComponent', () => {
  let component: HelpSearchComponent;
  let fixture: ComponentFixture<HelpSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HelpSearchComponent,
        InputComponent,
        ParagraphComponent,
        PageTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
