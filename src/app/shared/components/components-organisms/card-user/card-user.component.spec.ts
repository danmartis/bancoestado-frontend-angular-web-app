import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardUserComponent } from './card-user.component';
import { CardDefaultComponent } from '../../components-atom/card-default/card-default.component';
import { AvatarComponent } from 'src/app/shared/components/components-organisms/card-user/avatar/avatar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'

fdescribe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CardUserComponent, 
        CardDefaultComponent,
        AvatarComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    component.userData = {
      'firstName' : 'Juan',
      'lastName' :'Lugo' 
    }
    fixture.detectChanges();
    
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test handleDeleteUser', () => {
    component.deleteUser = true;
    component.deleteUserEv.emit(component.deleteUser);
    expect(component.deleteUser).toBe(true);
    expect(component.handleDeleteUser()).toBe();
  });

  it('Test handleEditUser', () => {
    let data = {
      'firstName' : 'Juan',
      'lastName' :'Lugo'
    }
    expect(component.handleEditUser(data)).toBe();
  });
});
