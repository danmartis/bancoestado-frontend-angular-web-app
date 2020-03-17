import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { VideoPipe } from './video.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';

 describe('TutorialsComponent', () => {
  let component: TutorialsComponent;
  let fixture: ComponentFixture<TutorialsComponent>;
  let service: GestorContenidoService; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GestorContenidoService],
      declarations: [ 
        TutorialsComponent,
        PageTitleComponent,
        VideoPipe
      ],schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeQuestion Test', () => {
    component.changeQuestion('testQuestion');
    expect(component.question).toBe('testQuestion');
  });

});
