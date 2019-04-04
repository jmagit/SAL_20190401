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
  constructor() { }

  ngOnInit() {
  }

}
