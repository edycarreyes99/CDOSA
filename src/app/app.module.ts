import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Importacion para las variables de entorno
import {environment} from '../environments/environment';

// Importacion de los modulos Custom para la aplicacion
import {MaterialModule} from './modules/material/material.module';

// Importacion de Servicios
import {ServicioService} from './services/servicio.service';

// Importacion de los modulos para los Toastr
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';

// importaciones de los modulos de firebase a utilizarce en la app
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';


import {LoginComponent} from './pages/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // moodulos de los formularios
    FormsModule,
    ReactiveFormsModule,

    // modulos de @angular/fire
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true
    }),
    AngularFireStorageModule,
    AngularFireAuthModule,

    // modulos del toast
    ToastrModule.forRoot(),
    ToastContainerModule,

    // modulos custom
    MaterialModule
  ],
  providers: [
    ServicioService,
    NavbarComponent,
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
