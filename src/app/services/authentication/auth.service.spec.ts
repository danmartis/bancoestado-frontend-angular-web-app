
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('AuthService', () => {


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

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

});
