import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PersonasListComponent } from '../personas/personas.component';
import { LoginComponent } from '../security';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [ HomeComponent, PersonasListComponent, LoginComponent, ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Home', componente: HomeComponent},
    { texto: 'Personas', componente: PersonasListComponent},
    { texto: 'Login', componente: LoginComponent},
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  seleccionar(ind: number) {
    this.seleccionado = this.menu[ind].componente;
  }
  ngOnInit() {
  }

}
