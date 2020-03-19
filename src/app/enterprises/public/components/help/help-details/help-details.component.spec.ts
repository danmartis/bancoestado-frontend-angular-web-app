import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDetailsComponent } from './help-details.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { HelpBannerComponent } from '../help-banner/help-banner.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HelpDetailsComponent', () => {
  let component: HelpDetailsComponent;
  let fixture: ComponentFixture<HelpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HelpDetailsComponent,
         PageComponent,
         Button2Component,
         HelpBannerComponent,
         ParagraphComponent,
         PageTitleComponent
        ],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
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
});
