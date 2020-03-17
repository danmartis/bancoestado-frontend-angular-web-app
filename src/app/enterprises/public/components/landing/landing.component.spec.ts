import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { BannerFeatureComponent } from './banner-feature/banner-feature.component';
import { FeatureComponent } from './feature/feature.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HelpPrefooterComponent } from 'src/app/shared/components/help-prefooter/help-prefooter.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { CardBenefitsComponent } from './benefits/card-benefits/card-benefits.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { ColoredLineComponent } from 'src/app/shared/components/components-atom/colored-line/colored-line.component';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { GestorContenidoServiceMock } from 'src/app/services/gestor-contenido.service.spec';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LandingComponent,
        FooterDefaultComponent,
        LinkComponent,
        ParagraphComponent,
        HeaderMainComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent,
        PageComponent,
        ModalComponent,
        BannerFeatureComponent,
        FeatureComponent,
        BenefitsComponent,
        HelpPrefooterComponent,
        Button2Component,
        IconComponent,
        CardBenefitsComponent,
        CardDefaultComponent,
        ColoredLineComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        //{ provide: GestorContenidoService, useClass: GestorContenidoServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
