import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ServicioService} from '../../services/servicio.service';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// controladores para el form de login
  loginEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  loginPasswordFormControl = new FormControl('', [
    Validators.minLength(6),
    Validators.required
  ]);

  constructor(
    public servicio: ServicioService,
    public sidenav: SidenavComponent,
    public navbar: NavbarComponent
  ) {
    this.sidenav.sidenavAbierta = false;
    this.servicio.mostrarNavbar = false;
    this.navbar.actualizarTitulo();
  }

  ngOnInit() {
  }

  // metodo para login
  login() {
    if (this.verificarDatosParaLogin()) {
      this.servicio.login(this.loginEmailFormControl.value.toString(), this.loginPasswordFormControl.value.toString()).then((user) => {
        this.servicio.newToast(1, '¡Inicio de Sesión Correcto!', `¡Bienvenido ${user.displayName}!`);
        this.servicio.navegar('home');
        console.log(user.uid);
      }).catch(e => {
        console.error(e);
        this.mostrarErrorAPartirDeCodigo(e.code.toString());
        this.reiniciarControls();
      });
    }
  }

  // metodo para reiniciar todos los controladores
  reiniciarControls() {
    this.loginEmailFormControl.reset();
    this.loginPasswordFormControl.reset();
  }

  // metodo para mostrar el error a partir del codigo de error
  mostrarErrorAPartirDeCodigo(error: string) {
    switch (error) {
      // los posibles errores para login
      case 'auth/wrong-password':
        this.servicio.newToast(0, '¡Hubo un error!', 'La Contraeña es incorrecta.');
        break;
      case 'auth/network-request-failed':
        this.servicio.newToast(0, '¡Hubo un error!', 'Revise su conexion a internet.');
        break;
      case 'auth/user-not-found':
        this.servicio.newToast(0, '¡Hubo un error!', 'El usuario o correo ingresado no existen.');
        break;
      // los posibles errores para el signup
      case 'auth/email-already-in-use':
        this.servicio.newToast(0, '¡Hubo un error!', 'Este email ya esta en uso.');
        break;
      default:
        this.servicio.newToast(0, '¡Hubo un error!', `${error}`);
        break;
    }
  }

  // metodo para verificar que todos los datos de login esten correctemente llenados
  verificarDatosParaLogin(): boolean {
    return this.loginEmailFormControl.valid && this.loginPasswordFormControl.valid;
  }
}
