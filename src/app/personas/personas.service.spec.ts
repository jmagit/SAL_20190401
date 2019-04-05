import { TestBed } from '@angular/core/testing';

import { PersonasViewModelService, PersonasDaoService } from './personas.service';
import { LoggerService } from 'src/my-core';
import { NavigateService } from '../common-app';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [ LoggerService, NavigateService, PersonasDaoService, ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
    }));

  it('should be created', () => {
    const service: PersonasViewModelService = TestBed.get(PersonasViewModelService);
    expect(service).toBeTruthy();
  });
});
