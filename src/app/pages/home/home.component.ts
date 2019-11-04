import {Component, OnInit} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {ServicioService} from '../../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public sidenav: SidenavComponent,
    public servicio: ServicioService,
    public navbar: NavbarComponent
  ) {
    this.sidenav.sidenavAbierta = true;
    this.servicio.mostrarNavbar = true;
  }

  ngOnInit() {
    this.navbar.actualizarTitulo();
  }

}
