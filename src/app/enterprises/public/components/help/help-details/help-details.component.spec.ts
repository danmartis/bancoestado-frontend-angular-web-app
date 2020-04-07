import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpDetailsComponent } from './help-details.component';
import { HelpBannerComponent } from '../help-banner/help-banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { QuestionsMenuComponent } from './questions-menu/questions-menu.component';
import { QuestionItemsComponent } from './question-items/question-items.component';
import { QuestionComponent } from './question/question.component';

describe('HelpDetailsComponent', () => {
  let component: HelpDetailsComponent;
  let fixture: ComponentFixture<HelpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HelpDetailsComponent,
         QuestionsMenuComponent,
         QuestionItemsComponent,
         QuestionComponent,
         HelpBannerComponent
        ],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          ComponentsModule
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test handleGoBack', () => {
    component.handleGoBack();
    expect(component.showMenuCatMobile).toBeTruthy();
  });

  it('Test onSelectCat', () => {
    let cadId = 2;
    component.onSelectCat(cadId);
    expect(component.selectedCat).toBe(cadId);
  });

});
