import { Injectable } from '@angular/core';
import { NotificationService } from '../common-app';
import { HttpClient } from '@angular/common/http';
import { NavigateService } from '../common-app/navigate.service';
import { VMDAOServiceBase } from '../code-base/vm';
import { LoggerService } from 'src/my-core';
import { RESTDAOService } from '../code-base/dao';

@Injectable({
  providedIn: 'root'
})
export class BlogDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'blog', { withCredentials: true });
  }
}

@Injectable({
  providedIn: 'root'
})
export class BlogVMService extends VMDAOServiceBase<BlogDAOService> {
  constructor(dao: BlogDAOService, notify: NotificationService, out: LoggerService, navigate: NavigateService) {
    super(dao, notify, out, navigate, '/blog', 'id');
  }
}
