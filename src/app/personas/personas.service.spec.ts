import { TestBed } from '@angular/core/testing';

import { PersonasViewModelService } from './personas.service';

describe('PersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasViewModelService = TestBed.get(PersonasViewModelService);
    expect(service).toBeTruthy();
  });
});
