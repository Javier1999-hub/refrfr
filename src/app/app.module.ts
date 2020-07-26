import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PerfildeusuarioComponent } from './perfildeusuario/perfildeusuario.component';
import { CarritodecomprassComponent } from './carritodecomprass/carritodecomprass.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    PrincipalComponent,
    CategoriasComponent,
    PerfildeusuarioComponent,
    CarritodecomprassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
