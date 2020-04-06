import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { CardUserComponent } from 'src/app/shared/components/components-organisms/card-user/card-user.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { AvatarComponent } from 'src/app/shared/components/components-organisms/card-user/avatar/avatar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../../../../services/authentication/auth.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         UsersComponent,
         CardUserComponent,
         CardDefaultComponent,
         AvatarComponent
        ],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test Modal', () => {
    expect(component.openUpdateUserModal()).not.toBeNull();
    expect(component.closeModal()).not.toBeNull();
    expect(component.handleDeleteUser()).not.toBeNull();
    expect(component.handleUpdateUser()).not.toBeNull();
  });

});

