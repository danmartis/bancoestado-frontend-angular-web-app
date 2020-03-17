import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginFlowComponent } from './shared/components/components-organisms/login-flow/login-flow.component';
import { ModalBenefitsComponent } from './shared/components/components-organisms/modal-benefits/modal-benefits.component';
import { ModalComponent } from './shared/components/components-organisms/modal/modal.component';
import { ButtonComponent } from './shared/components/components-atom/button/button.component';
import { InputComponent } from './shared/components/components-atom/input/input.component';
import { ParagraphComponent } from './shared/components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from './shared/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from './shared/components/components-atom/image/image.component';
import { IconComponent } from './shared/components/components-atom/icon/icon.component';
import { Button2Component } from './shared/components/button/button2/button2.component';
import { ModalIconComponent } from './shared/components/modal-icon/modal-icon.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LoginFlowComponent,
        ModalBenefitsComponent,
        ModalComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent,
        ModalTitleComponent,
        ImageComponent,
        IconComponent,
        Button2Component,
        ModalIconComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'serviestado-scss'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('serviestado-scss');
  });
});
