import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBenefitsComponent } from './card-benefits.component';
import { ColoredLineComponent } from 'src/app/shared/components/components-atom/colored-line/colored-line.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';

describe('CardBenefitsComponent', () => {
  let component: CardBenefitsComponent;
  let fixture: ComponentFixture<CardBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardBenefitsComponent,
        ColoredLineComponent,
        ParagraphComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBenefitsComponent);
    component = fixture.componentInstance;
    component.cardData = {
      title:'',
      description:'',
      iconSrc:'',
      lineColor:''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
