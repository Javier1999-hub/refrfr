import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfildeusuarioComponent } from './perfildeusuario/perfildeusuario.component';
import { CarritodecomprassComponent } from './carritodecomprass/carritodecomprass.component';
import { PruebaComponent } from './prueba/prueba.component';
import { DeportivaComponent } from './categorias/deportiva/deportiva.component';
import { FormalComponent } from './categorias/formal/formal.component';
import { FrioComponent } from './categorias/frio/frio.component';
import { JavierpruebaComponent } from './javierprueba/javierprueba.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    PrincipalComponent,
    PerfildeusuarioComponent,
    CarritodecomprassComponent,
    PruebaComponent,
    DeportivaComponent,
    FormalComponent,
    FrioComponent,
    JavierpruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
