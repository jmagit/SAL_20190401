import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-card',
  template: `
<div class="card">
    <ng-content select="[titulo]"></ng-content>
    <H1>{{ header }}</H1>
    <ng-content select=".cuerpo"></ng-content>
</div>`,
})
export class CardComponent {
    @Input() header: string = 'this is header';
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-form-button',
  template: `
  <p>
      <input type="button" value="Volver" (click)="cancel()">
      <input type="button" value="Enviar" [disabled]="disabled" (click)="send()">
  </p>
`,
})
export class FormButtonComponent {
  @Input() disabled: boolean = false;
  @Output() sendClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelClick: EventEmitter<any> = new EventEmitter<any>();

  send() {
    this.sendClick.emit(null);
  }
  cancel() {
    this.cancelClick.emit(null);
  }
}
