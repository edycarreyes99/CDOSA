import {Injectable} from '@angular/core';

// importacion de los componentes del ngx-toastr
import {ToastrService, IndividualConfig} from 'ngx-toastr';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  mostrarSidenavYNavbar = false;
  mostrarNavbar = false;

  constructor(
    public toast: ToastrService,
    public auth: AngularFireAuth,
    public router: Router
  ) {
  }

  // funcion para mostrar los toast desde cualquier pagina que tenga acceso al servicio
  public newToast(tipo: number, titulo: string, mensaje: string) {
    console.log('Mostrando el toast');
    const toastSettings: Partial<IndividualConfig> = {
      timeOut: 7000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    };
    if (tipo === 1) {
      this.toast.success(`${mensaje}`, `${titulo}`, toastSettings);
    } else {
      this.toast.error(`${mensaje}`, `${titulo}`, toastSettings);
    }
  }

  // funcion para realizar el login de los usuarios
  public login(email: string, password: string): Promise<User> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise<User>((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
        .then(datosUsuario => resolve(datosUsuario.user), err => reject(err))
        .catch((err) => {
          console.error(err);
        });
    });
  }

  // funcion que determinara la ruta para asi ocultar o mostrar el sidenav y el navbar
  determinarRuta(): string {
    if (this.router.url === '/' || this.router.url === 'login') {
      this.mostrarSidenavYNavbar = false;
    }
    return this.router.url;
  }

  // funcion para realizar las navegaciones entre las rutas de la plataforma
  navegar(ruta: string) {
    this.router.navigate([`/${ruta}`]);
    this.determinarRuta();
  }


}
