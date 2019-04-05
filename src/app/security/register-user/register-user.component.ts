import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { User, RegisterUserDAO, LoginService } from '../services/serguridad.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../../my-core';
import { NotificationService, NotificationType } from '../../common-app';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUserComponent implements OnInit {
  public miForm: FormGroup;
  private model: User = new User();

  constructor(private dao: RegisterUserDAO, private notify: NotificationService,
    private out: LoggerService, private router: Router, private login: LoginService) { }

  passwordMatchValidator(g: FormGroup) {
    return g.get('passwordValue').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

  ngOnInit() {
    // const fa = new FormArray([]);
    // this.model.roles.forEach(r => fa.push(
    //   new FormGroup({ role: new FormControl(r.role , Validators.required) })
    // ));
    this.miForm = new FormGroup({
      idUsuario: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.email]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      password: new FormGroup({
          passwordValue: new FormControl('', [Validators.required, Validators.minLength(2)]),
          passwordConfirm: new FormControl('', Validators.minLength(2)),
      }, this.passwordMatchValidator),
      roles: new FormArray([])
    });
    for (const name in this.miForm.controls) {
      if (this.miForm.controls[name] instanceof FormControl) {
        this.miForm.controls[name].valueChanges.subscribe(
          data => { this.formatErrorMessage(this.miForm.controls[name] as FormControl); }
        );
      }
    }
    for (const name in (this.miForm.get('password') as FormGroup).controls) {
      if ((this.miForm.get('password') as FormGroup).controls[name] instanceof FormControl) {
        (this.miForm.get('password') as FormGroup).controls[name].valueChanges.subscribe(
          data => { this.formatErrorMessage((this.miForm.get('password') as FormGroup).controls[name] as FormControl); }
        );
      }
    }
  }
  private formatErrorMessage(cntr: FormControl) {
    if (cntr.invalid) {
      let msg = '';

      if (cntr.hasError('required')) {
        msg += 'Es obligatorio. ';
      }
      if (cntr.hasError('minlength')) {
        msg += `Al menos debe tener ${cntr.getError('minlength').requiredLength} caracteres. `;
      }
      if (cntr.hasError('maxlength')) {
        msg += `Como máximo puede tener ${cntr.getError('maxlength').requiredLength} caracteres. `;
      }
      if (cntr.hasError('email')) {
        msg += 'Formato incorrecto de correo electronico. ';
      }
      if (cntr.hasError('mismatch')) {
        msg += 'No coincide. ';
      }
      cntr.setErrors({customMsg: msg.trim()});
    }
  }
  addRole() {
    (this.miForm.get('roles') as FormArray).push(
      new FormGroup({ role: new FormControl('Usuarios' , Validators.required) })
    );
  }
  deleteRole(ind: number) {
    (this.miForm.get('roles') as FormArray).removeAt(ind);
  }
  send(cierre = null) {
    if (this.miForm.invalid) {
      this.notify.add('Datos invalidos');
      return;
    }
    const data = this.miForm.value;
    this.model = ({
      idUsuario: data.idUsuario,
      password: data.password.passwordValue,
      nombre: data.nombre,
      roles: data.roles
     } as User);
    this.dao.add(this.model).subscribe(
      rslt => {
        this.login.login(data.idUsuario, data.password.passwordValue).subscribe(
          datos => {
            if (datos) {
              this.notify.add('Ususario reguistrado', NotificationType.log);
              // this.router.navigateByUrl('/');
              if (cierre) { cierre(); }
            } else {
              this.notify.add('Error en el registro.');
            }
          },
          err => { this.notify.add(err.message); }
        );
      },
      err => { this.notify.add(err.message); }
    );
  }
}
