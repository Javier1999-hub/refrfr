import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router }from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriasComponent } from './categorias/categorias.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: '**', pathMatch: 'full', redirectTo:'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
