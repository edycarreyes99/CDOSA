import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importacion de los componentes de cada vista para cada ruta
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  {path: '/', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
