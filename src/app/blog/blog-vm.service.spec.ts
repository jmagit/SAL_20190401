import { TestBed, inject } from '@angular/core/testing';

import { BlogVMService, BlogDAOService } from './blog-vm.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { LoggerService } from 'src/my-core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotificationService, NavigateService } from '../common-app';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogVMService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogVMService, LoggerService, BlogDAOService, NotificationService, NavigateService, ],
      imports:   [ HttpClientTestingModule, RouterTestingModule, ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([BlogVMService], (service: BlogVMService) => {
    expect(service).toBeTruthy();
  }));
});
