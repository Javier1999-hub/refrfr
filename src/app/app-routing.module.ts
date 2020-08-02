import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router }from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DeportivaComponent } from './categorias/deportiva/deportiva.component';
import { FormalComponent } from './categorias/formal/formal.component';
import { FrioComponent } from './categorias/frio/frio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'categorias/deportiva', component: DeportivaComponent},
  {path: 'categorias/formal', component: FormalComponent},
  {path: 'categorias/frio', component: FrioComponent},
  {path: 'inicio-sesion/inicio-sesion', component: InicioSesionComponent},

  {path: '**', pathMatch: 'full', redirectTo:'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
