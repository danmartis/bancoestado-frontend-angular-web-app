import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerPublicComponent } from './container-public/container-public.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { BranchOfficesComponent } from './components/branch-offices/branch-offices.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpDetailsComponent } from './components/help/help-details/help-details.component';
import { GestorContenidoService } from 'src/app/services/gestor-contenido.service';
import { AuthguardService } from 'src/app/services/helpers/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: ContainerPublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'nosotros', component: AboutComponent },
      { path: 'qué hacemos', component: WhatWeDoComponent },
      { path: 'sucursales', component: BranchOfficesComponent },
      { path: 'ayuda', component: HelpComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'iniciar-sesion', component: LoginComponent },
      { path: 'cambiar-clave', component: ResetPasswordComponent , canActivate: [ AuthguardService ] },
      { path: 'resumen', component: DashboardComponent, canActivate: [ AuthguardService ] },
      { path: 'ayuda/detalles', component: HelpDetailsComponent},
      { path: 'ayuda/detalles/categoria/:idItem', component: HelpDetailsComponent,
        resolve: { data: GestorContenidoService }
      },
      { path: 'ayuda/detalles/categoria/:idItem/pregunta/:idQuestion', component: HelpDetailsComponent,
        resolve  : { data: GestorContenidoService }
      },
      { path: 'configuracion-personal', loadChildren: () => import('./components/personal-config/personal-config.module').then(m => m.PersonalConfigModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
