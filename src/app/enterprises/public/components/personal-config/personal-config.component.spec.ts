import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//Libraries
import { PersonalConfigComponent } from './personal-config.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
        MyProfileComponent,
        ButtonComponent,
        PageComponent,
        InputComponent,
        CardUserComponent,
        InfoItemComponent,
        CardDefaultComponent
       ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule
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
});
