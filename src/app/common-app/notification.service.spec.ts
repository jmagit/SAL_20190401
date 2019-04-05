import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { LoggerService } from 'src/my-core';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [ LoggerService, ]}));

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });
});
