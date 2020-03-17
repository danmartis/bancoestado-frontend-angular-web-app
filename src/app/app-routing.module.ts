import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from './flow/status/not-found/not-found.component';

const routes: Routes = [
  // Path vacío redireccionando al home principal, en este caso "Personas", estandar de angular
  // { path: '', pathMatch: 'full', redirectTo: 'personas'},
  { path: '', loadChildren: () => import('./enterprises/enterprises.module').then(m => m.EnterprisesModule) },
  //{ path: 'personas', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'empresas', loadChildren: () => import('./enterprises/enterprises.module').then(m => m.EnterprisesModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
