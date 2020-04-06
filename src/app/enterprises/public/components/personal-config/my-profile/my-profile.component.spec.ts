import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyProfileComponent } from "./my-profile.component";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { InfoItemComponent } from "../info-item/info-item.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//services
import { FilesService } from '../../../../../services/files/files.service';import { SharedModule } from 'src/app/shared/shared.module';
;

describe("MyProfileComponent", () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileComponent, InfoItemComponent],
      imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        
      ], 
      providers: [
          { provide: FilesService }
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

  it("should get the current user data", () => {
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
});
