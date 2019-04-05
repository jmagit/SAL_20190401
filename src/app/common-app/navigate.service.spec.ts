import { TestBed } from '@angular/core/testing';

import { NavigateService } from './navigate.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, ],
  }));

  it('should be created', () => {
    const service: NavigateService = TestBed.get(NavigateService);
    expect(service).toBeTruthy();
  });
});
