import { IDAOService } from './dao';
import { ModoCRUD } from './tipos';
import { Subject } from 'rxjs';
import { NotificationService, NavigateService } from '../common-app';
import { LoggerService } from 'src/my-core';

export interface IVMService {
  list(): void;
  add(): void;
  edit(key: any): void;
  view(key: any): void;
  remove(key: any): void;
  cancel(): void;
  send(): void;
}

export class VMDAOServiceBase<T extends IDAOService<any, any>> implements IVMService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal = null;
  protected response = new Subject();

  constructor(protected dao: T, protected notify: NotificationService, protected out: LoggerService,
    protected navigate: NavigateService, protected urllist: string, protected pk = 'id') { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }
  public get Response() { return this.response; }

  public list() {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
        this.modo = 'list';
        this.response.next(data);
      },
      error => { this.notify.add(error.message); }
    );
  }

  public add() {
    this.modo = 'add';
    this.elemento = { id: 0 };
  }

  public edit(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.modo = 'edit';
        this.elemento = data;
        this.idOriginal = key;
        this.response.next(this.elemento);
        },
      error => { this.notify.add(error.message); }
    );
  }

  public view(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.modo = 'view';
        this.elemento = data;
        this.response.next(this.elemento);
        },
      error => { this.notify.add(error.message); }
    );
  }

  public remove(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }
    this.dao.remove(key).subscribe(
      data => {
        this.cancel();
        this.response.next(data);
      },
      error => { this.notify.add(error.message); }
    );
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.navigate.goBack(this.urllist);
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          data => {
            this.cancel();
            this.response.next(data);
          },
          error => { this.notify.add(error.message); }
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          data => {
            this.cancel();
            this.response.next(data);
          },
           error => { this.notify.add(error.message); }
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}
