import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsComponent } from './benefits.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { CardBenefitsComponent } from './card-benefits/card-benefits.component';
import { ColoredLineComponent } from 'src/app/shared/components/components-atom/colored-line/colored-line.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';

describe('BenefitsComponent', () => {
  let component: BenefitsComponent;
  let fixture: ComponentFixture<BenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BenefitsComponent,
        CardDefaultComponent,
        CardBenefitsComponent,
        ColoredLineComponent,
        ParagraphComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
