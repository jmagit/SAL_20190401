import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/serguridad.service';
import { NotificationService } from '../../common-app';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtButon = 'Log In';
  txtUsuario = 'admin';
  txtPassword = 'P@$$w0rd';

  constructor(public loginSrv: LoginService, private notify: NotificationService, private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.cambiaTexto();
  }

  logInOut() {
    if (this.loginSrv.isAutenticated) {
      this.loginSrv.logout();
      this.cambiaTexto();
    } else {
      this.loginSrv.login(this.txtUsuario, this.txtPassword).subscribe(
        data => {
          if (data) {
            this.cambiaTexto();
          } else {
            this.notify.add('Usuario o contraseña invalida.');
          }
        },
        err => { this.notify.add(err.message); }
      );
    }
  }

  registrar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    // this.router.navigateByUrl('/registro');
  }
  sendRegistrar(register, modal) {
    register.send(() => modal.close('Save click'));
    // this.router.navigateByUrl('/registro');
  }

  private cambiaTexto() {
    this.txtButon = this.loginSrv.isAutenticated ? 'Log Out' : 'Log In';
  }
}
