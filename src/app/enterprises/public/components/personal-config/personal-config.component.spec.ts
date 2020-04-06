import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//Libraries
import { PersonalConfigComponent } from './personal-config.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
//Components
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { CardUserComponent } from 'src/app/shared/components/components-organisms/card-user/card-user.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
//Services
import { AuthService } from 'src/app/services/authentication/auth.service';
import { UsersService } from '../../../../services/users/users.service';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { AvatarComponent } from 'src/app/shared/components/components-organisms/card-user/avatar/avatar.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('PersonalConfigComponent', () => {
  let component: PersonalConfigComponent;
  let fixture: ComponentFixture<PersonalConfigComponent>;

  let mockUser;

  beforeEach(async(() => {
    mockUser = jasmine.createSpyObj(['getCurrentUser']);
    mockUser.getCurrentUser.and.returnValue({});
    TestBed.configureTestingModule({
      declarations: [ 
        PersonalConfigComponent,
        InfoItemComponent,

       ],
      imports: [ 
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule, 
        
      ]
      // providers: [
      //   { provide: AuthService, useValue: mockUser }
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('btnSendNewUser Test', () => {
    component.btnSendNewUser();
  });

  it('toggleModal', () => {
    component.toggleModal();
  });

  it('closeModal', () => {
    component.closeModal();
  });

  it('handleCreateUser', () => {
    component.handleCreateUser();
  });

  it('handleUserRegCompleted', () => {
    component.handleUserRegCompleted();
  });

  it('handleAssignContactNewUser', () => {
    component.handleAssignContactNewUser();
  });
});
