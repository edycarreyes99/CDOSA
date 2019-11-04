import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importacion del guard para la aplicacion
import {AuthGuard} from './guards/auth.guard';

// Importacion de los componentes de cada vista para cada ruta
import {LoginComponent} from './pages/login/login.component';
import {InventarioComponent} from './pages/inventario/inventario.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inventario', component: InventarioComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
