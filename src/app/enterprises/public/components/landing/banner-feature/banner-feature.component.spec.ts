import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFeatureComponent } from './banner-feature.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BannerFeatureComponent', () => {
  let component: BannerFeatureComponent;
  let fixture: ComponentFixture<BannerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        BannerFeatureComponent,
        LinkComponent,
        ParagraphComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFeatureComponent);
    component = fixture.componentInstance;
    component.banners = 
      'BANNER_1',
      'BANNER_2',
      'BANNER_3',
      'BANNER_4',
      'BANNER_5',
      'BANNER_6'
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
