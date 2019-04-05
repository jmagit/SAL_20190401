import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasComponent } from './personas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoggerService } from 'src/my-core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonasComponent', () => {
  let component: PersonasComponent;
  let fixture: ComponentFixture<PersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasComponent ],
      providers: [ LoggerService, ],
      imports:   [ HttpClientTestingModule, RouterTestingModule, ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
