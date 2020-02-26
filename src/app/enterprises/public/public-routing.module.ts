import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerPublicComponent } from './container-public/container-public.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { BranchOfficesComponent } from './components/branch-offices/branch-offices.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerPublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'nosotros', component: AboutComponent },
      { path: 'qué hacemos', component: WhatWeDoComponent },
      { path: 'sucursales', component: BranchOfficesComponent },
      { path: 'ayuda', component: HelpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
