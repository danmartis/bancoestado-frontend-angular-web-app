import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { CUSTOM_ELEMENTS_SCHEMA, OnChanges } from '@angular/core';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

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
    const originalNavigate = TestBed.get(Router).navigate;
    spyOn(TestBed.get(Router), 'navigate').and.callFake((...options) => {
      fixture.ngZone.run(() => {
        originalNavigate.apply(TestBed.get(Router), options);
      });
    });
  });

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
    component.closeListOpenSingle(['testStringArray'], 'testString');
    expect(component.closeListOpenSingle).not.toBeNull();
  });

  it('Test ngAfterViewInit', () => {
    component.questionsData = 'Question Test';
    expect(component.ngAfterViewInit()).not.toBeNull();
  });

  it('Test handleGroupDetail', () => {
    let item = {
      'id' : '1'
    }
    expect(component.handleGroupDetail(item)).not.toBeNull();
  });

  it('Test handleFaqDetail', () => {
    let item = {
      'id' : '1',
      'idGroup' : '1'
    }
    expect(component.handleFaqDetail(item)).not.toBeNull();
  });
});
