import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicoComponent } from './dinamico.component';
import { HomeComponent } from '../home/home.component';
import { PersonasListComponent } from '../personas/personas.component';
import { LoginComponent } from '../security';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MyCoreModule, LoggerService } from 'src/my-core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

describe('DinamicoComponent', () => {
  let component: DinamicoComponent;
  let fixture: ComponentFixture<DinamicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MyCoreModule, FormsModule, HttpClientTestingModule, RouterTestingModule, ],
      providers: [ LoggerService ],
      declarations: [ DinamicoComponent, HomeComponent, PersonasListComponent, LoginComponent,  ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
