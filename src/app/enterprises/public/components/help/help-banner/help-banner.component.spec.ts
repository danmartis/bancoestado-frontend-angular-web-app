import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBannerComponent } from './help-banner.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';

describe('HelpBannerComponent', () => {
  let component: HelpBannerComponent;
  let fixture: ComponentFixture<HelpBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HelpBannerComponent,
        ParagraphComponent,
        PageTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpBannerComponent);
    component = fixture.componentInstance;
    component.bannerContent = ''
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
