import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCoreModule, LoggerService } from 'src/my-core';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { CommonAppModule } from './common-app';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitInterceptor, AjaxWaitComponent } from './ajax-wait/ajax-wait';
import { SecurityModule, LoggingInterceptor, AuthInterceptor } from './security';
import { DinamicoComponent } from './dinamico/dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    PERSONAS_COMPONENT,
    NotificationComponent,
    AjaxWaitComponent,
    DinamicoComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    MyCoreModule, CommonAppModule, SecurityModule,
  ],
  providers: [
    LoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
