import { Component, OnInit } from '@angular/core';
import { messages } from 'src/messages/messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = messages.HomeComponent.title;
  fecha = Date.now();
  msg = messages;

  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  numero = 12345.6789;

  constructor() { }

  ngOnInit() {
  }

}
