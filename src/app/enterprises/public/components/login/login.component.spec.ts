import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CardPageComponent } from 'src/app/shared/components/components-atom/card-page/card-page.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        LoginComponent,
        CardPageComponent,
        ButtonComponent,
        InputComponent,
        ParagraphComponent,
        ModalComponent,
        LinkComponent,
        IconComponent,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
