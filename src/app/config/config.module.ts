import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { DatosComponent } from './datos/datos.component';
import { PasswordComponent } from './password/password.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ConfigComponent },
  {path: 'datos', component: DatosComponent },
  {path: 'pwd', component: PasswordComponent },

];
@NgModule({
  declarations: [ConfigComponent, DatosComponent, PasswordComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class ConfigModule { }
