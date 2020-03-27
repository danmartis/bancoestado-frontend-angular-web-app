
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('AuthService', () => {
  let component: AuthService;
  let fixture: ComponentFixture<AuthService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        HttpClientTestingModule
      ],
      declarations: [ 


      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
