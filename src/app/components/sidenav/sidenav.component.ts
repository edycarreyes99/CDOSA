import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../../services/servicio.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavAbierta: boolean;

  constructor(
    private servicio: ServicioService,
  ) {
  }

  ngOnInit() {
  }

  // funcion para abrir o cerrar el sidenav
  abrirCerrarSideNav() {
    this.sidenavAbierta = !this.sidenavAbierta;
  }

  // funcion que se ejecutara cada vez que se desee realizar una navegacion entre las rutas de la plataforma
  navegar(ruta: string) {
    this.servicio.navegar(ruta);
  }

}
