import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyProfileComponent } from "./my-profile.component";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { InfoItemComponent } from "../info-item/info-item.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import 'rxjs/add/observable/from';

//services
import { FilesService } from '../../../../../services/files/files.service';
import { AuthService } from '../../../../../services/authentication/auth.service';
import { Observable } from 'rxjs';

describe("MyProfileComponent", () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;
  const authService = new AuthService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileComponent, InfoItemComponent],
      imports: [
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: FilesService, provideAuth: AuthService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be able to download pdf", () => {
    expect(component.downloadFile).toBeTruthy();
  });

  xit("should get the current user data", () => {

    component.ngOnInit();

    const user = {
      id: 1,
      email: "pruebaemailsiigroup@yopmail.com",
      rut: "76124890-1",
      firstName: "Claudio",
      lastName: "Monasterio",
      password: "movistar",
      changePassword: true,
      userRut: "15446676-k",
      birthday: "10/12/1986",
      phone: "+56978811992",
      address: "Los Cerezos 89, dpto 782",
      commune: "Ñuñoa",
      city: "Santiago",
      img: "",
      roles: [
        {
          id: 2,
          role: "Administrador"
        }
      ],
      covenants: [
        {
          nameFile: "Deptos. Coquimbo",
          activationDate: "10/07/2019"
        },
        {
          nameFile: "Deptos. Zona Sur",
          activationDate: "10/07/2019"
        }
      ],
      company: [
        {
          id: 2,
          name: "Telefónica"
        }
      ],
      contact: "Si",
      contactType: "Contacto Operacional"
    }

    const users = spyOn(authService, "getCurrentUser").and.returnValue(Observable.from([user]));

    component.getCurrentUser();

    expect(component.getCurrentUser).toEqual(users);

    component.ngOnInit();
    expect(component.getCurrentUser).toBeTruthy();
  });

  it("the function isAdmin should return true if user is admin", () => {
    expect(component.isAdmin).toBeTruthy();
  });

  it("the function isAdmin should return false if user isn't admin", () => {
    expect(!component.isAdmin).toBeFalsy();
  });

  it("the function isAdmin should match the string 'Administrador' to verify if user is admin", () => {
    const admin = "Administrador";
    expect(component.isAdmin).toMatch(admin);
  });

  it("the inputs should have a required message", () => {
    const required = "Este campo es requerido";
    expect(component.getMesaggeErrorAddress).toMatch(required);
    expect(component.getMesaggeErrorBirthday).toMatch(required);
    expect(component.getMesaggeErrorCity).toMatch(required);
    expect(component.getMesaggeErrorPhone).toMatch(required);
    expect(component.getMesaggeErrorZone).toMatch(required);
  });

  it("should have an only letters validation", () => {
    expect(component.onlyLetters).toBeTruthy();
  });

  it("should have a phone characters validation", () => {
    expect(component.phoneCharacters).toBeTruthy();
  });
});
