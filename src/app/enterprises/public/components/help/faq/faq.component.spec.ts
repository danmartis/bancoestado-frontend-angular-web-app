import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { FaqComponent } from './faq.component';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        GestorContenidoService
      ],
      imports : [ 
        NgxTinySliderModule,
        NgbModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        FaqComponent,
        PageTitleComponent,
        PageTitleComponent
      ], 
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeQuestion test', () => {
    component.changeQuestion('testQuestion')
    expect(component.questionsData).toBe('testQuestion');
  });

  it('the tinySliderConfig should be called with object', () => {
    spyOn(component, "tinySliderConfig");
    component.tinySliderConfig({'testTinySliderConfig': 'true'});
    expect(component.tinySliderConfig).toHaveBeenCalledWith({'testTinySliderConfig': 'true'});
  });

  it('the closeListOpenSingle method should have been called with an array & a string', () => {
    spyOn(component, "closeListOpenSingle")
    component.closeListOpenSingle(['testStringArray'], 'testString');
    expect(component.closeListOpenSingle).toHaveBeenCalledWith(['testStringArray'], 'testString');
  
    
  });
});
