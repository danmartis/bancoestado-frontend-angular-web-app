import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NotFoundComponent,
        FooterDefaultComponent,
        PageComponent,
        LinkComponent,
        ParagraphComponent,
        HeaderComponent,
        HeaderMainComponent,
        ButtonComponent,
        SidebarComponent,
        CapsuleComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
