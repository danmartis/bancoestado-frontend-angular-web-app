import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficesComponent } from './branch-offices.component';
import { FooterDefaultComponent } from 'src/app/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/components/components-atom/page/page.component';
import { CalltoactionComponent } from 'src/app/components/components-organisms/calltoaction/calltoaction.component';
import { ParagraphComponent } from 'src/app/components/components-atom/paragraph/paragraph.component';
import { PageTitleComponent } from 'src/app/components/components-atom/page-title/page-title.component';
import { ImageComponent } from 'src/app/components/components-atom/image/image.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';
import { ButtonComponent } from 'src/app/components/components-atom/button/button.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CapsuleComponent } from 'src/app/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BranchOfficesComponent', () => {
  let component: BranchOfficesComponent;
  let fixture: ComponentFixture<BranchOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BranchOfficesComponent,
        FooterDefaultComponent,
        PageComponent,
        CalltoactionComponent,
        ParagraphComponent,
        PageTitleComponent,
        ImageComponent,
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
    fixture = TestBed.createComponent(BranchOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
