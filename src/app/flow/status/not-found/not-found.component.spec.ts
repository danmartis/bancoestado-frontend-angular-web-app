import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { LinkComponent } from 'src/app/components/components-atom/link/link.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';

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
