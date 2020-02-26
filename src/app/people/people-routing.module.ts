import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerPublicComponent } from './public/container-public/container-public.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
