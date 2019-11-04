import {Component, Input, OnInit} from '@angular/core';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // @Input() titulo: string = null;

  public titulo = '';

  // variable que contendra el string de la fecha y hora
  fechaHora = '';

  // variable que contendra todos los meses
  // tslint:disable-next-line:max-line-length
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // variable que contendra todos los dias de la semana
  diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // variable que determina si mostrar o no el navbar
  mostrarNavbar = true;

  constructor(
    public sidenav: SidenavComponent,
    public route: ActivatedRoute
  ) {
    // en el momento que el componente se construye se manda a llamar a la funcion para extraer la fecha y la hora
    this.extraerFechaHora();
  }

  ngOnInit() {
  }

  // funcion para actualizar el titulo desde la ruta en la que se esta navegando
  actualizarTitulo(): string {
    this.titulo = this.route.snapshot.firstChild.url.toString();
    return this.titulo;
  }

  // funcion que generara el titulo del navbar en dependencia de en que ruta se encuentre
  generarTitulo(): string {
    const titulo: string = this.actualizarTitulo();
    switch (titulo) {
      case '':
        return 'Login';
      case 'inventario':
        return 'Inventario';
      default:
        return '';
    }
  }

  // funcion para abrir o cerra el sidenav desde el navbar
  abrirCerrarNavside() {
    this.sidenav.abrirCerrarSideNav();
  }

  // funcion para extraer la fecha y la hora a cada segundo
  extraerFechaHora() {
    setInterval(() => {
      const fechaHora = new Date();
      if ((fechaHora.getHours() >= 0) && (fechaHora.getHours() <= 12)) {
        // tslint:disable-next-line:max-line-length
        this.fechaHora = `${this.diasSemana[fechaHora.getDay()]} ${fechaHora.getDate()} de ${this.meses[fechaHora.getMonth()]} del ${fechaHora.getFullYear()} | ${fechaHora.getHours()}:${fechaHora.getMinutes()}:${fechaHora.getSeconds()} AM`;
      } else if (fechaHora.getHours() > 12) {
        // tslint:disable-next-line:max-line-length
        this.fechaHora = `${this.diasSemana[fechaHora.getDay()]} ${fechaHora.getDate()} de ${this.meses[fechaHora.getMonth()]} del ${fechaHora.getFullYear()} | ${fechaHora.getHours() - 12}:${fechaHora.getMinutes()}:${fechaHora.getSeconds()} PM`;
      }
    }, 1000);
  }
}
