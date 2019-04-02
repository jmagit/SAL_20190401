import { Component, OnInit } from '@angular/core';
import { NotificationService } from './common-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private notify: NotificationService) {

  }
  ngOnInit(): void {
    // this.notify.Notificacion.subscribe(
    //   data => alert(data.Message)
    // );
  }
}
