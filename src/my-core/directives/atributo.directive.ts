import { Directive, Input, Output, HostListener, EventEmitter, HostBinding, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({  selector: '[myWinConfirm]' })
export class WindowConfirmDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('myWinConfirmMessage') winConfirmMessage = '¿Seguro?';
  // tslint:disable-next-line:no-output-rename
  @Output('myWinConfirm') winConfirm: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() {
    this.isPressed = true;
  }
  @HostListener('mouseup') hasReleased() {
    this.isPressed = false;
  }
  ngOnInit(): void {
   console.log('myWinConfirm');
  }

}
// tslint:disable-next-line:directive-selector
@Directive({  selector: '[myShow]' })
export class ShowDirective {
  @HostBinding('hidden') hidden: boolean = false;
  @Input('myShow') set show(value: boolean) { this.hidden = !value; }
}
