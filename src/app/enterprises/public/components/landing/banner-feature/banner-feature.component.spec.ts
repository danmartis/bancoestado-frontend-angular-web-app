import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFeatureComponent } from './banner-feature.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BannerFeatureComponent', () => {
  let component: BannerFeatureComponent;
  let fixture: ComponentFixture<BannerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
