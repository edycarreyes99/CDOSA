import {Injectable} from '@angular/core';

// importacion de los componentes del ngx-toastr
import {ToastrService, IndividualConfig} from 'ngx-toastr';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    public toast: ToastrService,
    public auth: AngularFireAuth,
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

}
