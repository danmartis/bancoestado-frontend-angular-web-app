import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginFlowComponent } from './components/components-organisms/login-flow/login-flow.component';
import { ModalBenefitsComponent } from './components/components-organisms/modal-benefits/modal-benefits.component';
import { ModalComponent } from './components/components-organisms/modal/modal.component';
import { ButtonComponent } from './components/components-atom/button/button.component';
import { InputComponent } from './components/components-atom/input/input.component';
import { ParagraphComponent } from './components/components-atom/paragraph/paragraph.component';
import { ModalTitleComponent } from './components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from './components/components-atom/image/image.component';
import { IconComponent } from './components/components-atom/icon/icon.component';

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
        IconComponent
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
